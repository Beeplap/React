import React from "react";
import Navbar from "./Navbar";
import Addform from "./components/Addform";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/AddProducts" element={<Addform/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
