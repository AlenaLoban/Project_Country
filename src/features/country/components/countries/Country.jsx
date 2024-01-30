import { Link } from "react-router-dom";
import { RiMoreLine } from "react-icons/ri";
import styles from "./css/Countries.module.css";

const Country = ({ item }) => {
  return (
    <Link to={`/countries/${item.name.official}`}>
      <div className={styles.card}>
        <div
          className={styles.card__img}
          style={{
            backgroundImage: `url('${item.flags.svg}')`,
          }}
        ></div>

        <div className={styles.card__info}>
          <h3>{item.name.common}</h3>
          <div>
            <p>
              <span>Population:</span> {item.population}
            </p>
            <p>
              <span>Region:</span> {item.region}
            </p>
            <p>
              <span>Capital:</span> {item.capital}
            </p>
            <RiMoreLine size={20} color="green" />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Country;
