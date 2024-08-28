import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = ({carts}) => {
  return (
    <div className=" mt-4 mx-20">
      <Navbar  carts={carts} />
      <div className=" my-4">
        <img src="/assets/contact.png" alt="" />
        <h1 className=" mt-8 font-bold  text-4xl">Contact US</h1>
        <div className=" flex flex-col gap-4 mt-8 mb-14">
          <div className=" flex items-center gap-4">
            <img src="/assets/phone.svg" alt="" />
            <p className=" text-lg text-gray-600">+26378390400-4</p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="/assets/email.svg" alt="" />
            <p className=" text-lg text-gray-600">anbvuksh@gmail.com</p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="/assets/location.svg" alt="" />
            <p className=" text-lg text-gray-600">Dhaka 12938,abc road,Bangladesh</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
