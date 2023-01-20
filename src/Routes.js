import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import About from "./componets/About";
import Home from "./componets/Home";
import NoPage from "./componets/noPage";

const RouteComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  index path="/" element={<Home />} />
        <Route path="/about/hey" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComp;
