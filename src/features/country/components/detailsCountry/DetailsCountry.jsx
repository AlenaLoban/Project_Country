import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetBorderCountriesQuery } from "../../countryApi";
import styles from "./css/Detail.module.css";

const DetailsCountry = ({ country }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const borders = country.borders;
  const getValueCurrenc = (item) => {
    let result = "";
    let curr = "";
    for (let key in item) {
      result += key;
    }
    curr = item[result]?.name + " - " + item[result]?.symbol;
    return curr;
  };
  const detValueLang = (item) => {
    let result = "";
    for (let key in item) {
      result += item[key] + " ";
    }
    return result;
  };

  const { data = [], isLoading } = useGetBorderCountriesQuery(borders, {
    skip: !borders,
  });

  return (
    <div className="container ">
      <div className={styles.detail}>
        <div>
          <div className={styles.detail__back} onClick={goBack}>
            <IoIosArrowRoundBack /> Back
          </div>
        </div>
        <div className={styles.country}>
          <div
            className={styles.country__img}
            style={{ backgroundImage: `url('${country.flags.svg}')` }}
          ></div>
          <div className={styles.country__body}>
            <div className={styles.country__title}>
              <h1>{country.name.common}</h1>
            </div>
            <div className={styles.country__info}>
              <div className="country__info--one">
                <p>
                  <span>Official Name : </span> {country.name.common}
                </p>
                <p>
                  <span>Population : </span> {country.population}
                </p>
                <p>
                  <span>Region : </span> {country.region}
                </p>
                <p>
                  <span>Sub Region : </span> {country.subregion}
                </p>
                <p>
                  <span>Capital : </span> {country.capital}
                </p>
              </div>
              <div className="country__info--two">
                <p>
                  <span>Currency : </span> {getValueCurrenc(country.currencies)}
                </p>
                <p>
                  <span>Languages : </span> {detValueLang(country.languages)}
                </p>
              </div>
            </div>
            <div>
              <div className={styles.border}>
                <h3>Border contries: </h3>
                <div className={styles.border__info}>
                  {isLoading && <h2>Loading..</h2>}

                  {!borders ? (
                    <h3>There are not border countries</h3>
                  ) : (
                    <ul>
                      {data.map((item) => (
                        <Link
                          key={item.name.common}
                          to={`/countries/${item.name.common}`}
                        >
                          <li>{item.name.common}</li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsCountry;
