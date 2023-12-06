import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Detailes from "./pages/Detailes";
import Layout from "./components/Layout";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:name" element={<Detailes />} />
      </Route>
    </Routes>
  );
};
export default Routing;
