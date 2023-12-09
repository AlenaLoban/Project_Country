import Country from "./Country";
import SKeleton from "./Skeleton";
import { useGetCountriesQuery } from "../../core/store/countriesApi";
import { useContext, useEffect, useState } from "react";
import { SearchContext, SortContext } from "../../core/Context";
import ReactPaginate from "react-paginate";
import styles from "./css/Countries.module.css";

const Countries = () => {
  const { data = [], isLoading, isError } = useGetCountriesQuery();
  const [selectedOption] = useContext(SortContext);
  const [searchValue] = useContext(SearchContext);
  const [filteredCountry, setFilteredCountry] = useState(data);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredCountry.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredCountry.length / itemsPerPage);

  useEffect(() => {
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
  }, [searchValue, selectedOption, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCountry.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.items}>
      <div className={styles.items__body}>
        {currentItems.map((item) =>
          isLoading ? (
            <SKeleton />
          ) : (
            <Country key={item.name.common} item={item} />
          )
        )}
        {isError && <h2>Error server</h2>}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        pageLinkClassName={styles.page_num}
        previousLinkClassName={styles.page_num}
        nextLinkClassName={styles.page_num}
        activeLinkClassName={styles.active}
      />
    </div>
  );
};
export default Countries;
