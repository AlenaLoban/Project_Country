import { useParams } from "react-router-dom";
import DetailsCountry from "../components/detailsCountry/DetailsCountry";
import { useGetCountryQuery } from "../redux/countriesApi";

const Detailes = () => {
  const { name } = useParams();
  const { data = [], isLoading, isError } = useGetCountryQuery(name);
  return (
    <div>
      {isError && <h2>Error server</h2>}
      {isLoading ? (
        <h2>Loading..</h2>
      ) : (
        data.map((item) => (
          <DetailsCountry key={item.name.common} country={item} />
        ))
      )}
    </div>
  );
};
export default Detailes;
