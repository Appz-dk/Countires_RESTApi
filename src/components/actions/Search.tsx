import { SearchIcon } from "../../assets/SearchIcon";
import "./Search.css"

const Search = () => {
  return <div className="search-container">
    <SearchIcon />
    <input placeholder="Search for a country..." />
  </div>;
};

export default Search;
