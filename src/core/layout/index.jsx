import { Outlet } from "react-router-dom";
import HeaderCountry from "../../features/header/HeaderCountry";
import "../css/App.css"

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
