import Country from "./Country";
import SKeleton from "./Skeleton";
import ReactPaginate from "react-paginate";
import styles from "./css/Countries.module.css";
import { useCountriesContext } from "../../Context";

const Countries = () => {
  const { pageCount, currentItems, handlePageClick, isError, isLoading } =
    useCountriesContext();

  return (
    <div className={styles.items}>
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
    </div>
  );
};
export default Countries;
