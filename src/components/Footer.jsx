import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-slate-900 -mx-20 h-30 px-20 py-10 flex justify-between items-center">
        <Link to={"/"}>
          <img src="/assets/logo2.svg" alt="" />
        </Link>
        <p className=" font-medium text-gray-400">All Right Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
