import Select from "react-select";
import { useCountriesContext } from "../../Context";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const SelectCountry = () => {
  const { selectedOption, setSelectedOption } = useCountriesContext();
  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      placeholder="filter by region"
      isClearable
      isSearchable={false}
    />
  );
};
export default SelectCountry;
