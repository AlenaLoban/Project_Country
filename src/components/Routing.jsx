import { Route, Routes } from "react-router-dom";
import Home from "../core/pages/Home";
import Catalog from "../core/pages/Catalog";
import Detailes from "../core/pages/Detailes";
import Layout from "./Layout";
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
