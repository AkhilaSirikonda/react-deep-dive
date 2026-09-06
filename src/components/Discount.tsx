import React, { createContext, useContext } from 'react';

// 1. Create the Context with a default value
const UserTierContext = createContext<string>('Standard');

export default function Discount() {
  return (
    // 2. Provide the "VIP" status to the entire card grid
    <UserTierContext value="VIP">
      <CardGrid />
    </UserTierContext>
  );
}

function CardGrid(): React.JSX.Element {
  // Notice CardGrid doesn't need to know or pass the user tier!
  return (
    <div style={{ display: 'flex', gap: '16px', padding: '20px' }}>
      <ProductCard name="Wireless Headphones" price={99} />
      <ProductCard name="Mechanical Keyboard" price={149} />
    </div>
  );
}

function ProductCard({ name, price }: { name: string; price: number }): React.JSX.Element {
  // 3. Read the Context value directly inside the Card
  const userTier = useContext(UserTierContext);

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      {userTier === 'VIP' && (
        <span style={{ background: 'gold', padding: '4px 8px', borderRadius: '4px' }}>
          ★ VIP 10% Off Applied
        </span>
      )}
    </div>
  );
}