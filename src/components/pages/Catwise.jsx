import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Product from "../Product";
import { Link, useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const Catwise = ({carts}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [nowShowing, setNowShowing] = useState(8);
  const [isLoading, setIsLoading] = useState(true); 

  const {type} = useParams()

  const handleShowmore = () => {
    setNowShowing((prevNowShowing) => prevNowShowing + 8);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.in/api/products/category?type=${type}`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
        setIsLoading(false);
      });
  }, [type]);

  return (
    <div className="mt-4 mx-20">
      <Navbar  carts={carts} />
      <div className="py-10">
        <div className="pb-8 flex justify-between">
          <div>
            <h1 className="font-bold text-4xl text-gray-900">Our Products</h1>
            <p className="font-medium text-gray-400">Buy what you want</p>
          </div>
          {/* <div className="flex justify-center items-center">
            <p>All</p>
            <img src="/assets/Arrow - Down 9.svg" alt="" className="w-6" />
          </div> */}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <SyncLoader color="#4A90E2" loading={isLoading} size={10} />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {allProducts.slice(0, nowShowing).map((product) => (
              <Link to={`/Products/${product.id}`} key={product.id}>
                <Product key={product.id} product={product} />
              </Link>
            ))}
          </div>
        )}

        <div className="flex justify-center pt-8">
        {allProducts.length > nowShowing && (
            <button
              className="bg-slate-900 text-white p-4 px-8 rounded-md"
              onClick={handleShowmore}
            >
              Show More
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catwise