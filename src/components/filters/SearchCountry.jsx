
import { MdOutlineSearch } from "react-icons/md";

const SearchCountry = ({searchValue, SetSearchValue}) => {

   return(
      <div className="search">
         <input 
         type ="search" 
         placeholder="Search.."
         value={searchValue}
         onChange={(e)=>SetSearchValue(e.target.value)}

         />
         <span><MdOutlineSearch /></span> 
      </div>
   )
}
export default SearchCountry