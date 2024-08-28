import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const About = ({carts}) => {
  return (
    <div className=" mt-4 mx-20">
      <Navbar carts={carts} />
      <div className=" my-4">
      <img src="/assets/about.png" alt="" />
      <h1 className=" mt-8 font-bold  text-4xl">About US</h1>
      <p className=" mt-6 mb-16 text-lg text-gray-600">Welcome to XStore, your ultimate destination for cutting-edge gadgets. Founded with a passion for technology and innovation, XStore brings you a curated selection of the latest smartphones, TVs, and a variety of high-tech gadgets. At XStore, we are committed to offering our customers the best shopping experience possible. Our mission is to provide top-quality products at competitive prices, coupled with exceptional customer service. Whether you're upgrading your smartphone, enhancing your home entertainment with a new TV, or exploring the latest in wearable technology, XStore is here to meet your needs. We pride ourselves on our extensive product knowledge and dedication to customer satisfaction. With secure transactions, fast shipping, and reliable customer support, XStore aims to make your shopping experience seamless and enjoyable. Join thousands of satisfied customers who trust XStore for their gadget needs. Explore our wide range of products and discover why XStore is your go-to destination for all things tech.</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
