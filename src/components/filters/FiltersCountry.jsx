import SearchCountry from "./SearchCountry"
import SelectCountry from "./SelectCountry"
import  {  useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { filterCountry } from '../../redux/countrySlice'



const FiltersCountry = () => {
   const [selectedOption, setSelectedOption] = useState('');
   const [searchValue, SetSearchValue] = useState('');

   const dispatch = useDispatch();

   useEffect( ()=> {
      const regionValue = selectedOption?.value || '';
      dispatch(filterCountry({searchValue,regionValue}))
   },[selectedOption,searchValue])
   return(
      <div className="filters">
         <SearchCountry searchValue={searchValue} SetSearchValue={SetSearchValue} />
         <SelectCountry selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      </div>
   )
}
export default FiltersCountry