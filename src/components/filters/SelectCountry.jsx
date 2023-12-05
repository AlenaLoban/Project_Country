import Select from 'react-select';


const options = [
   { value: 'Africa', label: 'Africa' },
   { value: 'America', label: 'America' },
   { value: 'Asia', label: 'Asia' },
   { value: 'Europe', label: 'Europe' },
   { value: 'Oceania', label: 'Oceania' },
 ];

const SelectCountry = ({selectedOption, setSelectedOption}) => {
   

   return(
      <Select 
         className="react-select-container"
         classNamePrefix="react-select"
         defaultValue={selectedOption}
         // onChange={(choice)=>setSelectedOption(choice.value)}
         onChange={setSelectedOption}
         options={options}
         placeholder='filter by region'
         isClearable
         isSearchable={false}
      />
   )
}
export default SelectCountry