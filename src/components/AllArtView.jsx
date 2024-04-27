import { useLoaderData } from "react-router-dom";

const AllArtView = () => {
  const cart = useLoaderData();
  const {
    image,
    description,
    img,
    item_name,
    subcategory_Name,
    price,
    rating,
    short_description,

    processing_time,
    customization,
    stockStatus,
  } = cart;
  console.log(cart);
  return (
    <div>
      imggggg{rating}
      <h1>desv {description}</h1>
      <img src={img} alt="" />
      <p>descrip {short_description}</p>
    </div>
  );
};

export default AllArtView;
