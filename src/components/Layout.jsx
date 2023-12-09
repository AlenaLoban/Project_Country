import { Outlet } from "react-router-dom";
import HeaderCountry from "./header/HeaderCountry";
import "../core/css/App.css";

const Layout = () => {
  return (
    <>
      <HeaderCountry />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
