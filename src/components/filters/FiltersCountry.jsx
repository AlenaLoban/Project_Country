import SearchCountry from "./SearchCountry";
import SelectCountry from "./SelectCountry";
import styles from "./css/Filter.module.css";

const FiltersCountry = () => {
  return (
    <div className={styles.filters}>
      <SearchCountry />
      <SelectCountry />
    </div>
  );
};
export default FiltersCountry;
