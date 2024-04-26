import React from "react";

const CartItem = ({ cardItem }) => {

const {name, img, description} = cardItem;

  return (
    <div className="mx-auto max-w-6xl my-5 ">
      <div className="max-w-xs rounded-md shadow-md bg-purple-200 text-gray-900">
        <img
          src={cardItem.img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-100"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
             {cardItem.name}
            </h2>
            <p className="text-gray-800">
            {cardItem.description}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
