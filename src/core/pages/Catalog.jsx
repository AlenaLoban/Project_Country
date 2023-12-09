import FiltersCountry from "../../components/filters/FiltersCountry";
import Countries from "../../components/countries/Countries";
import { SearchContext, SortContext } from "../Context";
import { useState } from "react";

const Catalog = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <SortContext.Provider value={[selectedOption, setSelectedOption]}>
      <SearchContext.Provider value={[searchValue, setSearchValue]}>
        <div className="catalog">
          <FiltersCountry />
          <Countries />
        </div>
      </SearchContext.Provider>
    </SortContext.Provider>
  );
};
export default Catalog;
