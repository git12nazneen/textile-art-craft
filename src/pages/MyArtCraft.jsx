import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCard from '../components/MyCard';

const MyArtCraft = () => {
    const myCards = useLoaderData();
    return (
        <div className=' max-w-6xl mx-auto bg-white my-10'>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2  mx-auto">
         
            {
                myCards.map( myCard => <MyCard
                key={myCard._id}
                myCard={myCard}
                ></MyCard>)
            }
        </div>
        </div>
    );
};

export default MyArtCraft;