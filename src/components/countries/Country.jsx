import { Link } from "react-router-dom";
import { RiMoreLine } from "react-icons/ri";
import styles from "./css/Countries.module.css";

const Country = ({ item }) => {
  return (
    <Link to={`/catalog/${item.name.official}`}>
      <div className={styles.card}>
        <div
          className={styles.card__img}
          style={{
            backgroundImage: `url('${item.flags.svg}')`,
          }}
        ></div>
        <h3>{item.name.common}</h3>
        <div className={styles.card__info}>
          <p>
            <span>Population:</span> {item.population}
          </p>
          <p>
            <span>Region:</span> {item.region}
          </p>
          <p>
            <span>Capital:</span> {item.capital}
          </p>
          <Link to={`/catalog/${item.name.official}`}>
            <RiMoreLine size={20} color="green" />
          </Link>
        </div>
      </div>
    </Link>
  );
};
export default Country;
