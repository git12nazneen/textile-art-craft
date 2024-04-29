import React from "react";
import { useLoaderData } from "react-router-dom";
import SubCard from "./SubCard";

const Subcategory = () => {
  const subcategory = useLoaderData();
  console.log(subcategory)
  return (
    <div>
      <h2>Name of : {subcategory.length}</h2>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 mx-auto">
        {subcategory.map((subItem) => (
          <SubCard key={subItem._id} subItem={subItem}></SubCard>
        ))}
      </div>
    </div>
  );
};

export default Subcategory;
