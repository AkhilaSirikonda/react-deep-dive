import React, {useState, useEffect, useMemo} from 'react';

interface User {
    id: number,
    user: String,
}
interface Recipe {
    id: number;
    name: string;
    prepTimeMinutes: number;
    servings: number;
    image: string;
    cuisine: string;
}
interface SidebarProps {
    searchQuery: string;
}
function Sidebar({ searchQuery }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);
    // const [user, setUser] = useState<User[] | null>(null);
    const [liked, setLiked] = useState(true);
    const [text, setText] = useState('Akhila');

    const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        count
    }, [setIsOpen])

//     const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
// };

// useMemo example
// const menuList = [
//   { id: 1, name: 'Chicken Curry' },
//   { id: 2, name: 'Beef Tacos' },
//   { id: 3, name: 'Chicken Noodle Soup' }
// ];

// const query = "CHICKEN";

// const filteredMenu = useMemo(() => {
//   return menuList.filter((recipe) =>
//     recipe.name.toLowerCase().includes(query.toLowerCase())
//   );
// }, [query]);

// Result: [{ id: 1, name: 'Chicken Curry' }, { id: 3, name: 'Chicken Noodle Soup' }]

useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
        .then((res) => {
            if(!res.ok) throw new Error('Network response failed');
            return res.json()
        })
        .then((data) => {
            setRecipes(data.recipes);
            setLoading(false);
            console.log(recipes);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        })
}, []);

const handleLikedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLiked(e.target.checked);
};

const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

const filteredRecipes = useMemo(() => {
    if (!searchQuery.trim()) return recipes;

    return recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [recipes, searchQuery]);

    if (loading) return <div>Loading recipe cards...</div>;
    if (error) return <div>Error loading recipes: {error}</div>;
    return (
        <>
        <div>
            <input 
            value={text}
            onChange= {handleTextChange}
            >
            </input>
        </div>
        <div>
            <button
            onClick = {() => {
                if (isOpen) {
                setText('Akhila');
            }
            setIsOpen(!isOpen);
            }}
            >
                {isOpen? "SidebarOpen" : "SidebarClosed"}
            </button>
            <h2>typed: {text}</h2>
        </div>
        <div>
            <button
            onClick = {() => setCount(count+1)}
            >
                Count : {count}
            </button>
        </div>
        <div>
            <label>
            <input
            type="checkbox"
            checked={liked}
            onChange={handleLikedChange}
            />
            I liked this
        </label>
        <p>You {liked ? 'liked' : 'did not like'} this with input text as {text}.</p>
        </div>
        <div 
        style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
        {/* To check data inside the recipes */}
        {console.log(recipes)}
      {recipes.slice(0, 6).map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px',
            width: '200px',
          }}
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }}
          />
          <h3 style={{ fontSize: '16px', margin: '8px 0 4px' }}>{recipe.name}</h3>
          <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>{recipe.cuisine}</p>
          <small>{recipe.prepTimeMinutes} mins prep</small>
        </div>        
      ))}
        </div>
        {/* Recipe Gallery */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
        {filteredRecipes.length === 0 ? (
          <p>No recipes found matching "{searchQuery}"</p>
        ) : (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '12px',
                width: '200px',
              }}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <h3 style={{ fontSize: '16px', margin: '8px 0 4px' }}>{recipe.name}</h3>
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>{recipe.cuisine}</p>
              <small>{recipe.prepTimeMinutes} mins prep</small>
            </div>
          ))
        )}
      </div>
      </>
        
    );
}

export default Sidebar;