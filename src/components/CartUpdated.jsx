import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const CartUpdated = () => {

    const loadedCraft = useLoaderData()

    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const image = form.image.value;
        const updatedCraft = { item_name, subcategory_Name, short_description, price, rating, processing_time, customization, stockStatus, image};
       console.log(updatedCraft);

       fetch(`http://localhost:5000/addCraft/${loadedCraft._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(updatedCraft)
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data);
        if(data.modifiedCount>0){
            swal('User updated card')
        }
       })
    }


    return (
        <div>
            loaded craft :   {loadedCraft. item_name}
            <form
          onSubmit={handleUpdate}  
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-100">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Add your craft item </p>
              <p className="text-xs">
                You can Updated item which you are mostly like .
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              
             

             
              <div className="col-span-full sm:col-span-3">
              <div className="col-span-full">
                <label htmlFor="short description" className="text-sm">
                  Short description
                </label>
                <input
                  id="short_description"
                  defaultValue={loadedCraft?.short_description}
                  type="text"
                  name="short_description"
                  placeholder="short description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="form-control">
              <label htmlFor="image" className="text-sm">
                 Img url
                </label>
                    <input
                     type="text"
                     defaultValue={loadedCraft?.image}
                     placeholder="image url"
                      name="image"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"  
                    />
                    </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="item_name" className="text-sm">
                  Item name
                </label>
                <input
                  id="item_name"
                  defaultValue={loadedCraft?.item_name}
                  name="item_name"
                  type="text"
                  placeholder="item_name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="subcategory_Name" className="text-sm">
                  Subcategory Name
                </label>
                <input
                  id="subcategory_Name"
                  defaultValue={loadedCraft?.subcategory_Name}
                  type="text"
                  name="subcategory_Name"
                  placeholder="subcategory_name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              {/* <div className="col-span-full">
                <label htmlFor="short description" className="text-sm">
                  Short description
                </label>
                <input
                  id="short_description"
                  defaultValue={loadedCraft?.short_description}
                  type="text"
                  name="short_description"
                  placeholder="short description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div> */}
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="price" className="text-sm">
                  Price
                </label>
                <input
                  id="price"
                  defaultValue={loadedCraft?.price}
                  type="text"
                  placeholder="price"
                  name="price"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="rating" className="text-sm">
                  Rating
                </label>
                <input
                  id="rating"
                  defaultValue={loadedCraft?.rating}
                  name="rating"
                  type="text"
                  placeholder="rating"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="processing_time" className="text-sm">
                  Processing_time
                </label>
                <input
                  id="processing_time"
                  defaultValue={loadedCraft?.processing_time}
                  type="text"
                  name="processing_time"
                  placeholder="processing_time"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-sm">
                  Customization
                </label>
                <input
                  id="customization"
                  defaultValue={loadedCraft?.customization}
                  type="text"
                  name="customization"
                  placeholder="customization"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="stockStatus" className="text-sm">
                  StockStatus
                </label>
                <input
                  id="stockStatus"
                  defaultValue={loadedCraft?.stockStatus}
                  name="stockStatus"
                  type="text"
                  placeholder="stockStatus"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
            </div>
            <div class="flex justify-center items-center mx-auto">
              <div class="text-center mx-auto">
                <button class="btn w-32 bg-purple-700 text-white">
                 Update item
                </button>
              </div>
            </div>
          </fieldset>
        </form>
        </div>
    );
};

export default CartUpdated;