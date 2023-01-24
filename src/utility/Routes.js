import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import PageNotFound from "../pages/PageNotFound";
import CatListig from "../pages/CatListing";
import CatDetails from "../pages/CatDetails";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cat-list" element={<CatListig />} />
        <Route path="/cat-list/:catId" element={<CatDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

// syntax of dynamic routes
// path ="basicPath/:(paramName)"

export default RouterComponent;
