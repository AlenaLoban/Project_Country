import { MdOutlineSearch } from "react-icons/md";
import { useContext } from "react";
import { SearchContext } from "../../Context";

const SearchCountry = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search.."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <span>
        <MdOutlineSearch />
      </span>
    </div>
  );
};
export default SearchCountry;
