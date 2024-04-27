import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ cardItem }) => {
  const { firstname, lastname, email, item_name, subcategory_Name, short_description, price, rating, processing_time, customization, stockStatus, image, _id } = cardItem;

  return (
    <div className="mx-auto max-w-6xl my-5 ">
      <div className="max-w-xs rounded-md shadow-md bg-purple-200 text-gray-900">
        <img
          src={  image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-100"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {subcategory_Name}
            </h2>
            <p className="text-gray-800">{short_description}</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
          >
            <Link to={`cartView/${_id}`}> View details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
