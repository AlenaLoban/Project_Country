import { NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const HeaderCountry = () => {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");
  const [burger, setBurger] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header ">
          <div
            className="header__logo"
            style={{
              backgroundImage: `url('logo.jpg')`,
            }}
          ></div>
          <nav>
            <ul
              onClick={() => setBurger(!burger)}
              className={
                burger ? "header__list header__list-active " : "header__list"
              }
            >
              <li>
                <NavLink to="/" className={setActive}>
                  Home
                </NavLink>
              </li>
              <li>About Us</li>
              <li>
                <NavLink to="/countries" className={setActive}>
                  Countries
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__burger" onClick={() => setBurger(!burger)}>
            {burger ? (
              <IoMdClose size={50} color="white" />
            ) : (
              <IoMenuOutline size={50} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderCountry;
