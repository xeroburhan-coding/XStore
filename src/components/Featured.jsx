import React from "react";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate()

  const handleHeadset = () => {
    navigate("/products/1")
  }

  const handleIphone = () => {
    navigate("/products/16")
  }

  const handleController = () => {
    navigate("/products/2")
  }

  return (
    <div className=" grid grid-cols-2 gap-4 mx-20 my-10">
      <div className=" h-full rounded-lg bg-fe1 bg-repeat-none bg-cover relative cursor-pointer" onClick={handleHeadset}>
        <div className=" h-20 w-full opacity-50 bg-black absolute bottom-0 rounded-b-lg">
          <div className="py-2 px-10">
            <h1 className=" font-semibold text-2xl text-white">Sony WH-1000XM3</h1>
            <p className=" text-lg font-medium text-gray-400">Buy Now</p>
          </div>
        </div>
      </div>
      <div className=" grid grid-rows-2 gap-4">
        <div className=" h-96  rounded-lg bg-fe2 bg-repeat-none bg-cover relative cursor-pointer" onClick={handleIphone}>
          <div className=" h-20 w-full opacity-50 bg-black absolute bottom-0 rounded-b-lg">
            <div className="py-2 px-10">
              <h1 className=" font-semibold text-2xl text-white">
              Apple iPhone 14 Pro
              </h1>
              <p className=" text-lg font-medium text-gray-400">Buy Now</p>
            </div>
          </div>
        </div>
        <div className=" h-96 rounded-lg bg-fe3 bg-repeat-none bg-cover relative cursor-pointer" onClick={handleController}>
          <div className=" h-20 w-full opacity-50 bg-black absolute bottom-0 rounded-b-lg ">
            <div className="py-2 px-10">
              <h1 className=" font-semibold text-2xl text-white opacity-100">
              Xbox Wireless Controller
              </h1>
              <p className=" text-lg font-medium text-gray-400">Buy Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
