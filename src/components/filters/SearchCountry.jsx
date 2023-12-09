import { MdOutlineSearch } from "react-icons/md";
import { useContext } from "react";
import { SearchContext } from "../../core/Context";
import styles from "./css/Filter.module.css";

const SearchCountry = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);

  return (
    <div className={styles.search}>
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
