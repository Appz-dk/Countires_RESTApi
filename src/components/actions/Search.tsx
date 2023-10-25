import { SearchIcon } from "../../assets/SearchIcon";
import "./Search.css"

type SearchProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<SearchProps> = ({searchText, setSearchText}) => {
  return <div className="search-container">
    <SearchIcon />
    <input placeholder="Search for a country..." value={searchText} onChange={e => setSearchText(e.target.value)}/>
  </div>;
};

export default Search;
