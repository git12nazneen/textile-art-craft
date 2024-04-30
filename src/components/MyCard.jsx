
import React from 'react';
import { Link } from 'react-router-dom';
import Pagetitle from './Pagetitle';


const MyCard = ({ myCard, handleDelete }) => {
    const {
        _id,
        item_name, subcategory_Name, short_description, price, rating, processing_time, customization, stockStatus, image
    } = myCard;



    return (
        <div className="my-5">
             <Pagetitle title='Addcraft'></Pagetitle>
            <div className="hero bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-2xl mx-auto bg-sky-100 rounded-xl">
                    <div className="flex-1">
                        {/* <h1 className="text-2xl font-bold">{item_name}</h1> */}

                        <p className="text-2xl font-bold">{subcategory_Name}</p>
                        <p className="py-1">{short_description.slice(0,100)}</p>
                        <p className="py-1">Price: {price}</p>
                        <p className="py-1">Rating:{rating}</p>
                        <p className="py-1">StockStatus:{stockStatus}</p>
                        <p className="py-1">Customization:{customization}</p>
                        <p className="py-1">Processing_time:{processing_time}</p>

                        <div className="flex">
                           <Link to={`/cartUpdated/${_id}`}>
                              <button className="mr-8 btn btn-primary">Updated</button>
                           </Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
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

