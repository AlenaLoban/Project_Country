import '../../App.css';
import { NavLink } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';




const HeaderCountry = () => {
   const setActive = ({isActive}) =>  isActive ? 'active-link' : '';
   const [burger, setBurger] = useState(false)

   return(
      <header>
         <div className='container ' >
            <div className= 'header'>
               <p>WIW</p>
               <nav>
                  <ul onClick={()=>setBurger(!burger)} className= {burger? 'header__list header__list-active ' : 'header__list'  }>
                     <li><NavLink to="/" className={setActive}>Home</NavLink></li>
                     <li><NavLink to="/about" className={setActive}>About Us</NavLink></li>
                     <li><NavLink to="/catalog" className={setActive}>Catalog</NavLink></li>
                  </ul>
               </nav>
               <div className = 'header__burger' onClick={()=>setBurger(!burger)} >
                  { burger?  <IoMdClose size={50} color='white'/> : <IoMenuOutline size={50} />  }
               </div> 
            </div>
         </div>
      </header>
   )
}
export default HeaderCountry