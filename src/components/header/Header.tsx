import { MoonSolid } from "../../assets/MoonSolid";
import { MoonRegular } from "../../assets/MoonReg";
import "./Header.css"


type HeaderProps = {
  theme: string;
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const isDarkMode = theme === "dark"

  return <header className="header">
    <h1>Where in the world?</h1>
    <button className="theme-actions" onClick={toggleTheme}>
      {isDarkMode ? <MoonSolid /> : <MoonRegular />}
      <span>{isDarkMode ? "Dark" : "Light"} mode</span>
    </button>
  </header>;
};

export default Header;
