import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../css/App.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
