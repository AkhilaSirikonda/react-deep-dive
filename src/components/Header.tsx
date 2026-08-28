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
      {/* Header content */}
    </header>
  );
}