import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../components/SingleCard";

const SubCategoryPage = () => {
  const allCards = useLoaderData();
  if(!allCards){
        return <div> Loading</div>
      }
  return (
    <div className="bg-purple-200 ">
      <div className=" max-w-6xl mx-auto  mt-10">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2  mx-auto">
          {allCards.map((singleCard) => (
            <SingleCard
              key={singleCard._id}
              singleCard={singleCard}
            ></SingleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategoryPage;

