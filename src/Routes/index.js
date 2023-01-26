import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bollywood from "../Pages/Bollywood";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bollywood />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;