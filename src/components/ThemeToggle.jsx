function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Basculer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
      title={`Mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">
          {theme === 'dark' ? '☀️' : '🌙'}
        </span>
      </span>
    </button>
  );
}

export default ThemeToggle;