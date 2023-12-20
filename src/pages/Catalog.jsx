import FiltersCountry from "../features/country/components/filters/FiltersCountry";
import Countries from "../features/country/components/countries/Countries";
import { Provider } from "../features/country/Context";

const Catalog = () => {
  return (
    <Provider>
      <div className="catalog">
        <FiltersCountry />
        <Countries />
      </div>
    </Provider>
  );
};
export default Catalog;
