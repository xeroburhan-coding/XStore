import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Catwise from "./pages/Catwise";

export const CartContext = createContext(null);

const Routess = () => {
  const [carts, setCarts] = useState([]);

  return (
    <div>
      <CartContext.Provider value={{ carts, setCarts }}>
        <Routes>
          <Route path="/" element={<App carts={carts} />} />
          <Route path="/Products" element={<Products carts={carts} />} />
          <Route path="/About" element={<About carts={carts} />} />
          <Route path="/Contact" element={<Contact carts={carts} />} />
          <Route path="/Feedback" element={<Feedback carts={carts} />} />
          <Route
            path="/Cart"
            element={<Cart carts={carts} setCarts={setCarts} />}
          />
          <Route
            path="/Products/:id"
            element={<ProductDetail ccarts={carts} />}
          />
          <Route path="/:type" element={<Catwise carts={carts} />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
};

export default Routess;
