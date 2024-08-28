import React from "react";
import { Link } from "react-router-dom";

const Category = ({ title, subTitle, img,type }) => {
  return (
    <div>
      <Link to={`/${type}`}>
      <div className=" h-80 bg-softbg flex justify-center items-center w-auto">
        <img src={img} alt="" className=" w-48" />
      </div>
      <div className="py-4">
        <h1 className=" font-semibold text-2xl text-gray-900">{title}</h1>
        <p className=" text-lg font-medium text-gray-400">{subTitle}</p>
      </div>
      </Link>
    </div>
  );
};

export default Category;
