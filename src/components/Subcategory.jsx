import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubCard from "./SubCard";

const Subcategory = () => {
  const [subCard, setSubCard] = useState()
  // const subcategory = useLoaderData();
  useEffect(()=>{
    fetch("https://art-craft-server-psi.vercel.app/subcategory")
    .then(res => res.json())
    .then(data=>{
     setSubCard(data)
    })
  },[])
  console.log(subCard)
  
  return (
    <div className="bg-gray-100">
      {/* <h2>Name of : {subCard.length}</h2> */}
       <div className="max-w-6xl grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3  mx-auto">
      {
       subCard  && subCard.map((item) => (
          <SubCard key={item._id} item={item}>
            

          </SubCard>
        ))
      }
       </div> 
    </div>
  );
};

export default Subcategory;
