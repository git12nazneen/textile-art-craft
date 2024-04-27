import React from 'react';
import SingleCard from '../components/SingleCard';
import { useLoaderData } from 'react-router-dom';

const AllArtCraft = () => {
    const allCards = useLoaderData();
    return (
        <div className=' max-w-6xl mx-auto bg-white my-10'>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2  mx-auto">
         
            {
                allCards.map( singleCard => <SingleCard
                key={singleCard._id}
                singleCard={singleCard}
                ></SingleCard>)
            }
        </div>
        </div>
    );
};

export default AllArtCraft;