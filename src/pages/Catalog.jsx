import FiltersCountry from "../components/filters/FiltersCountry";
import Items from "../components/items/Items";
import { SearchContext, SortContext } from "../Context";
import { useState } from "react";

const Catalog = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <SortContext.Provider value={[selectedOption, setSelectedOption]}>
      <SearchContext.Provider value={[searchValue, setSearchValue]}>
        <div className="container">
          <FiltersCountry />
          <Items />
        </div>
      </SearchContext.Provider>
    </SortContext.Provider>
  );
};
export default Catalog;
