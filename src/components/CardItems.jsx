import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

const CardItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 mx-auto">
        {products.slice(0, 6).map((cardItem) => (
          <CartItem key={cardItem._id} cardItem={cardItem}></CartItem>
        ))}
      </div>
    </div>
  );
};

export default CardItems;

// 6 ta data homepage e dekhabo
// input theke kono data post korle, all craft page e dekhabe .
// input er data amr homepage e show korbe na
// fixed 6ta data home page e thakbe
//
