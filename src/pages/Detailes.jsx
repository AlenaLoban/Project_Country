import { useParams } from "react-router-dom";
import DetailsCountry from "../components/detailsCountry/DetailsCountry";
import  { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchContryByName } from '../redux/countrySlice'




const Detailes = () => {
   const {name} = useParams();


   const {error, contry} = useSelector(state => state.country)
   const dispatch = useDispatch();

   useEffect(()=>{dispatch(fetchContryByName(name))},[name,dispatch])
   return(
      <div >
         {error && <h2>Error server</h2>}
         {contry.map(item =><DetailsCountry key ={item.name.common} country={item}/>)}

         
      </div>
   )
}
export default Detailes