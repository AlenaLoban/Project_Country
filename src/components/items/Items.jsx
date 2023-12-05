import Item from "./Item";
import  { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchContries } from '../../redux/countrySlice';
import SKeleton from "../Skeleton";


const Items = ( ) => {
   const dispatch = useDispatch();
   useEffect(()=>{dispatch(fetchContries())},[dispatch])
   const {isLoading, error, choiseCountries} = useSelector(state => state.country)
   
   return(
      <div className="container items">
         {isLoading ? <SKeleton/> : choiseCountries.map((item) => <Item key={item.name.common} item={item}/>)}
         {error && <h2>Error: {error}</h2> }
      </div>
   )
}
export default Items