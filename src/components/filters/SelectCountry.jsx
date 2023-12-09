import Select from "react-select";
import { useContext } from "react";
import { SortContext } from "../../core/Context";
import styles from "./css/Filter.module.css";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const SelectCountry = () => {
  const [selectedOption, setSelectedOption] = useContext(SortContext);
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
