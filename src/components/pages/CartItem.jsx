import React from "react";

const CartItem = ({ cart, onDelete }) => {
  const handleDelete = () => {
    onDelete(cart.id);
  };

  return (
    <div className="my-14">
      <div className="flex justify-between">
        <div className="flex items-center gap-8">
          <div className="h-28 w-28 bg-softbg flex justify-center items-center">
            <img src={cart.image} alt="" className="w-20 mix-blend-multiply" />
          </div>
          <div>
            <h1 className="text-xl font-bold">
              {cart.title?.length > 75
                ? `${cart.title?.slice(0, 75)} ....`
                : cart.title}
            </h1>
            <h1 className="text-3xl font-bold text-gray-600">${cart.price}</h1>
          </div>
        </div>
        <img
          src="/assets/delete.png"
          alt="Delete"
          className="h-14 w-14 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default CartItem;
