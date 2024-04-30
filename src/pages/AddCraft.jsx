import Swal from "sweetalert2";


const AddCraft = () => {

    const handleAddCart = e =>{
        e.preventDefault();
        const form = e.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const image = form.image.value;
       const newAddCraft = {firstname, lastname, email, item_name, subcategory_Name, short_description, price, rating, processing_time, customization, stockStatus, image};
       console.log(newAddCraft);

      //  send data to the server
      fetch('https://art-craft-server-psi.vercel.app/addCraft',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(newAddCraft)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
              title: "Success",
              text: "Your cart has been added.",
              icon: "success"
            });
      }
      })
    }

  return (
    <div className="my-10">
      <section className="p-10 bg-purple-200 text-gray-900">
        <form
          onSubmit={handleAddCart}  
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-100">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Add your craft item </p>
              <p className="text-xs">
                You can add item which you are mostly like .
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
              <div className="form-control">
              <label htmlFor="image" className="text-sm">
                 Img url
                </label>
                    <input
                     type="text"
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
                {/* <input
                  id="item_name"
                  name="item_name"
                  type="text"
                  placeholder="item_name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                /> */}
                {/* <select name='item_name' className="select select-bordered w-full"
                                    >
                                    <option disabled >item_name</option>
                                    <option selected={data.countryname === 'Bangladesh'}>Bangladesh</option>
                                    <option selected={data.countryname === 'Thailand'}>Thailand</option>
                                   </select> */}
                 <input

                  id="item_name"
                  name="item_name"
                  type="text"
                  placeholder="item_name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="subcategory_Name" className="text-sm">
                  Subcategory Name
                </label>
                <input
                  id="subcategory_Name"
                  type="text"
                  name="subcategory_Name"
                  placeholder="subcategory_name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="short description" className="text-sm">
                  Short description
                </label>
                <input
                  id="short_description"
                  type="text"
                  name="short_description"
                  placeholder="short description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="price" className="text-sm">
                  Price
                </label>
                <input
                  id="price"
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
                  Add item
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddCraft;
