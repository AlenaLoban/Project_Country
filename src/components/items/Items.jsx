import Item from "./Item";
import SKeleton from "../Skeleton";
import { useGetCountriesQuery } from "../../redux/countriesApi";
import { useContext, useEffect, useState } from "react";
import { SearchContext, SortContext } from "../../Context";

const Items = () => {
  const { data = [], isLoading, isError } = useGetCountriesQuery();
  const [selectedOption] = useContext(SortContext);
  const [searchValue] = useContext(SearchContext);
  const [filteredCountry, setFilteredCountry] = useState(data);

  const setFilter = () => {
    let countries = [...data];
    const regionValue = selectedOption?.value || "";
    if (regionValue) {
      countries = countries.filter((country) =>
        country.region.includes(regionValue)
      );
    }
    if (searchValue) {
      countries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setFilteredCountry(countries);
  };
  useEffect(() => {
    setFilter();
  }, [searchValue, selectedOption]);

  return (
    <div className="container items">
      {isLoading ? (
        <SKeleton />
      ) : (
        filteredCountry.map((item) => (
          <Item key={item.name.common} item={item} />
        ))
      )}
      {isError && <h2>Error server</h2>}
    </div>
  );
};
export default Items;
