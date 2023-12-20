import { useMemo, useState } from "react";
import constate from "constate";
import { useGetCountriesQuery } from "./countryApi";

function useCountries() {
  const [searchValue, setSearchValue] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const { data = [], isLoading, isError } = useGetCountriesQuery();
  const [itemOffset, setItemOffset] = useState(0);

  const filteredCoutries = useMemo(() => {
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
    return countries;
  }, [searchValue, selectedOption, data]);

  const itemsPerPage = 15;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredCoutries.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredCoutries.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCoutries.length;
    setItemOffset(newOffset);
  };

  return {
    searchValue,
    setSearchValue,
    selectedOption,
    setSelectedOption,
    filteredCoutries,
    pageCount,
    currentItems,
    handlePageClick,
    isLoading,
    isError,
  };
}

export const [Provider, useCountriesContext] = constate(useCountries);
