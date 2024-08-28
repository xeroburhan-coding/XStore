import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catrgories from "./components/Catrgories";
import Featured from "./components/Featured";
import OurProducts from "./components/OurProducts";
import Special from "./components/Special";
import Footer from "./components/Footer";

const App = ({ carts }) => {
  return (
    <div className=" mt-4 mx-20  min-h-screen">
      <Navbar carts={carts} />
      <Hero carts={carts} />
      <Catrgories carts={carts} />
      <Featured carts={carts} />
      <OurProducts carts={carts} />
      <Special carts={carts} />
      <Footer carts={carts} />
    </div>
  );
};

export default App;
