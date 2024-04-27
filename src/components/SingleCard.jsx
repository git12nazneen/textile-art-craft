import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ singleCard }) => {
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
    _id
  } = singleCard;
  return (
    <div className="my-5">
      <div className="hero bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-2xl mx-auto bg-sky-100 rounded-xl">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-5">{item_name}</h1>
            <p className="py-2">{subcategory_Name}</p>
           <p className="text-sm">Here's a brief overview of each textile art form along with information .If you know more click the view details page .</p>
          <div className="flex space-y-3 items-center text-center">
          <p className=" bg-white p-2 mr-3 my-2 text-sm text-blue-400 rounded-sm">Price:{price}</p>
          <p className="bg-white p-2 text-sm text-blue-400 rounded-sm">Stock :{stockStatus}</p>
          </div>
          <Link to={`allArtView/${_id}`}> <button className="my-3 btn bg-sky-400">View Details</button> </Link>
          </div>
          <div className="flex-1">
            <img className="h-80 w-80 rounded-xl" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
