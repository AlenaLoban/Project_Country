import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detailes from "../pages/Detailes";
import Layout from "./layout";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="countries" element={<Catalog />} />
        <Route path="countries/:name" element={<Detailes />} />
      </Route>
    </Routes>
  );
};
export default Routing;
