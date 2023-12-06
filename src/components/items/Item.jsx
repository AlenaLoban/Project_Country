import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={`/catalog/${item.name.official}`}>
      <div className="card">
        <div
          className="card__img"
          style={{
            backgroundImage: `url('${item.flags.svg}')`,
          }}
        ></div>

        <div className="card__info">
          <h3>{item.name.common}</h3>
          <p>
            <span>Population:</span> {item.population}
          </p>
          <p>
            <span>Region:</span> {item.region}
          </p>
          <p>
            <span>Capital:</span> {item.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Item;
