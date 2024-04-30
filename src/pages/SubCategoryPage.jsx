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


// import React from 'react'
// import { Link, useLoaderData } from 'react-router-dom'

// const SubCategoryPage = () => {
//   const allCards = useLoaderData()
//   if(!allCards){
//     return <div> Loading</div>
//   }
//   return (
//     <div>
//       <div className="bg-purple-200 ">
//        <div className=" max-w-6xl mx-auto  mt-10">
//          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2  mx-auto">
//            {allCards.map((singleCard) => (
//               <div key={singleCard._id} className="my-5">
//               <div className="hero ">
//                 <div className="hero-content flex-col lg:flex-row-reverse max-w-2xl mx-auto bg-white rounded-xl">
//                   <div className="flex-1">
//                     <h1 className="text-2xl font-bold mb-5">{singleCard.item_name}</h1>
//                     <p className="py-2">{singleCard.subcategory_Name}</p>
//                    <p className="text-sm">Here's a brief overview of each textile art form along with information .If you know more click the view details page .</p>
//                   <div className="flex space-y-3 items-center text-center">
//                   <p className=" bg-white p-2 mr-3 my-2 text-sm bg-purple rounded-sm">Price:{singleCard.price}</p>
//                   <p className="bg-white p-2 text-sm bg-purple rounded-sm">Stock :{singleCard.stockStatus}</p>
//                   </div>
//                   <Link to={`/craft/${singleCard._id}`}> <button className="my-3 btn bg-purple-400">View Details</button> </Link>
        
//                   </div>
//                   <div className="flex-1">
//                     <img className="h-80 w-80 rounded-xl" src={singleCard.image} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//            ))}
//          </div>
//        </div>
//      </div>

//     </div>
//   )
// }

// export default SubCategoryPage