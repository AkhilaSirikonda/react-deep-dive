import react from 'react';

function PracticeReact({items=[]}) {

// if(items === undefined || items.length === 0 || items === null) {
//     return <div>No items to display</div>;
// }

if (!Array.isArray(items)) {
    return <p>No items found.</p>;
  }


  return (
    <div>
      <h1>Practice React Component</h1>
      <p>This is a practice component for React.</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeReact;