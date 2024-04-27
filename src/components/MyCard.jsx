import React from "react";

const MyCard = ({ myCard }) => {
  const {
    image,
    item_name,
    subcategory_Name,
    short_description,
    price,
    rating,
    processing_time,
    customization,
    stockStatus,
  } = myCard;
  return (
    <div className="my-5">
      <div className="hero bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-2xl mx-auto bg-sky-100 rounded-xl">
        <div className="flex-1">
            <h1 className="text-2xl font-bold">{item_name}</h1>
            <p className="py-2">{short_description}</p>
          <div className="flex">
          <button className="mr-8 btn btn-primary">Updated</button>
          <button className="btn btn-primary">Delete</button>
          </div>
          </div>
        <div className="flex-1">
        <img className="h-80 w-80" src={image} alt="" />
          
        </div>
         
        </div>
      </div>
    </div>
  );
};

export default MyCard;
