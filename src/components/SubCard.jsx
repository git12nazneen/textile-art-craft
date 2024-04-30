import React from 'react';
import { Link } from 'react-router-dom';

const SubCard = ({item}) => {
   
    
    return (
        <div className='mx-auto py-5'>
            {/* <h1>{item.length}</h1> */}
           {/* <p>{item._id}</p>
           <p>{item.subcategory_Name}</p>
           <Link to={item.url}> Explore</Link> */}

           <div className="card w-80 bg-base-100 shadow-xl image-full h-96">
            <figure><img className='w-full' src={item.image_link} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Textile</h2>
                <p>{item.subcategory_Name}</p>
                <div className="card-actions justify-end">
                <Link to={item.url}> Explore</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SubCard;

