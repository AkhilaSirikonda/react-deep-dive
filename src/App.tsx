import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Timer from './components/Timer';
import Discount from './components/Discount';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const authorName = "Akhila Sirikonda";

  

  return (
    <div style={{ backgroundColor: isDarkMode ? '#121212' : '#fff', minHeight: '100vh' }}>
      <Header
        authorName={authorName}
        repoUrl="https://github.com/AkhilaSirikonda/react-deep-dive"
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onSearch={(query) => setSearchQuery(query)}
      />

      <main style={{ padding: '24px', color: isDarkMode ? '#fff' : '#000' }}>
        <h2>Current Search: {searchQuery || 'None'}</h2>
        <p>Welcome to your React + TypeScript deep dive guide!</p>
        <h2><u>useEffect & useState</u></h2>
        <Sidebar searchQuery={searchQuery}/>
        <h2><u>useContext</u></h2>
        <Discount/>
      </main>

      <footer>
        <h2><u>useRef</u></h2>
          Timer
        <Timer/>
      </footer>
    </div>
  );
}