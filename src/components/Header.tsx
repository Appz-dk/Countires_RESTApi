import moon from "../assets/moon-regular.svg"
import moonSolid from "../assets/moon-solid.svg"
import "./Header.css"

const isDarkMode = true

const Header = () => {
  return <header className="header">
    <h1>Where in the world?</h1>
    <div className="theme-actions">
      <img className="moon-icon" src={isDarkMode ? moonSolid : moon} />
      <span>{isDarkMode ? "Dark" : "Light"} mode</span>
    </div>
  </header>;
};

export default Header;
