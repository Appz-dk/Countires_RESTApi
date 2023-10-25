import Search from "./Search";
import "./MainContent.css"
import Filter from "./Filter";

const MainContent = () => {
  return <main className="main-content">
    <div className="main-filter-container">
    <Search />
    <Filter />
    </div>
  </main>;
};

export default MainContent;
