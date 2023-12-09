import { Route, Routes } from "react-router-dom";
import Home from "../core/pages/Home";
import AboutUs from "../core/pages/AboutUs";
import Catalog from "../core/pages/Catalog";
import Detailes from "../core/pages/Detailes";
import Layout from "./Layout";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:name" element={<Detailes />} />
      </Route>
    </Routes>
  );
};
export default Routing;
