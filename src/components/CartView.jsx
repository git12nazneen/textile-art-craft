import { useLoaderData } from "react-router-dom";

const CartView = () => {
  const cart = useLoaderData();
  const {
    firstname, lastname, email, item_name, subcategory_Name, short_description, price, rating, processing_time, customization, stockStatus, image, _id
  } = cart;
  console.log(cart);
  return (
    <div>
      <section>
        <div className="bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
              {subcategory_Name}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              {short_description}
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50"
              >
                price: {price}$
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900"
              >
                Rating: {rating}*
              </button>
            </div>
            <div className="flex flex-wrap justify-center text-center mt-3">
              <div className="bg-white flex-1 mr-3 rounded-sm p-2">
                <h1>Processing time: {processing_time}</h1>
              </div>
              <div className="bg-gray-800 text-white flex-1 mr-3 p-2">
                <h1>Customization: {customization.slice(0, 15)}</h1>
              </div>
              <div className="bg-white flex-1 rounded-sm p-2">
                <h1>Stock : {stockStatus}</h1>
              </div>
            </div>
          </div>
        </div>
        <img
          src={image}
          alt=""
          className="w-5/6 max-h-96 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40"
        />
      </section>
    </div>
  );
};

export default CartView;
