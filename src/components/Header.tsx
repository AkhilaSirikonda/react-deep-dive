import "../styles/Header.css";

interface HeaderProps {
  authorName: string;
  repoUrl: string;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onSearch: (query: string) => void;
}

export default function Header({
  authorName,
  repoUrl,
  isDarkMode,
  onToggleTheme,
  onSearch,
}: HeaderProps) {
  return (
    <header className={`header ${isDarkMode ? 'header-dark' : 'header-light'}`}>
      {/* 1. Brand / Logo Section */}
      <div className="brand">
        <span className="logo-icon">⚛️</span>
        <h1 className="title">React Tutorial</h1>
        <span className="author-badge">by {authorName}</span>
      </div>

      {/* 2. Search Section */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search concepts (e.g., useState, VDOM)..."
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* 3. Controls / Navigation Section */}
      <nav className="nav">
        <button 
          onClick={onToggleTheme} 
          className="theme-button"
          aria-label="Toggle dark mode"
          type="button"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        <a 
          href={repoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-link"
        >
          GitHub
        </a>
        <img 
            src="/profile.jpg"
            alt={authorName} 
            className="profile-avatar"
          />
      </nav>
    </header>
  );
}