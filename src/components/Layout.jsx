import { Outlet } from "react-router-dom";
import HeaderCountry from "./header/HeaderCountry";

const Layout = () => {
  return (
    <>
      <HeaderCountry />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
