function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      <h2 className="logo">Shafna Shamsuddin</h2>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

    </nav>
  );
}

export default Navbar;