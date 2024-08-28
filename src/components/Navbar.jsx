import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({carts}) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "font-bold" : "";
  };

  return (
    <div>
      <nav>
        <div className="flex justify-between pb-2">
          <img src="/assets/Search.svg" alt="" className="w-8" />
          <Link to="/">
            <img src="/assets/logo.svg" alt="" />
          </Link>
          <div>
            <div className="relative py-2">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-blue-500 p-3 text-xs text-white">
                  {carts ? carts.length : 0}
                </p>
              </div>
              <Link to="/Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="file mt-4 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 
                    2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.
                    75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center py-4 gap-6">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/Products" className={isActive("/Products")}>
            Products
          </Link>
          <Link to="/About" className={isActive("/About")}>
            About Us
          </Link>
          <Link to="/Contact" className={isActive("/Contact")}>
            Contact Us
          </Link>
          <Link to="/Feedback" className={isActive("/Feedback")}>
            Feedback
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
