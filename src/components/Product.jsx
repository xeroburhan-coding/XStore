import React from "react";

const Product = ({product}) => {
  return (
    <div>
      <div>
        <div className=" h-80 bg-softbg flex justify-center items-center w-auto">
          <img src={product.image} alt="" className=" w-48 mix-blend-multiply" />
        </div>
        <div className="py-4">
          <h1 className=" font-semibold text-2xl text-gray-900"> {product.title?.length > 25 ? `${product.title?.slice(0, 25)} ..` : product.title}</h1>
          <p className=" text-lg font-medium text-gray-400">{product.price} $</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
