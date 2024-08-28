import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartItem from "./CartItem";

const Cart = ({ carts, setCarts }) => {
  const handleDeleteItem = (itemId) => {
    const updatedCartItems = carts?.filter((item) => item.id !== itemId);
    setCarts(updatedCartItems);
  };

  return (
    <div className="mt-4 mx-20 min-h-screen">
      <Navbar carts={carts} />
      <div className="my-4">
        <h1 className="mt-8 mb-2 font-bold text-4xl">Cart</h1>
        {carts.length > 0
          ? carts.map((cart) => (
              <CartItem key={cart.id} cart={cart} onDelete={handleDeleteItem} />
            ))
          : "No items added"}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
