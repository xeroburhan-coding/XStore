import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className=" py-10">
      <div className=" pb-8 flex justify-between">
        <div>
          <h1 className=" font-bold text-4xl text-gray-900">Our Products</h1>
          <p className=" font-medium text-gray-400">Buy What youy want</p>
        </div>
        {/* <div className=" flex justify-center items-center">
          <p>All</p>
          <img src="/assets/Arrow - Down 9.svg" alt="" className=" w-6" />
        </div> */}
      </div>
      <div className=" grid grid-cols-4 gap-8">
        {products.slice(0, 8).map((product) => (
          <Link to={`/Products/${product.id}`} key={product.id}>
            <Product key={product.id} product={product} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <Link to={"/Products"}>
          <button className=" bg-slate-900 text-white p-4 px-8 rounded-md">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
