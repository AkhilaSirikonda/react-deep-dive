import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

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
        <Sidebar/>
      </main>
    </div>
  );
}