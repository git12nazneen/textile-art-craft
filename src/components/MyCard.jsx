
import Swal from "sweetalert2";

const MyCard = ({ myCard }) => {

  const handleDelete = _id =>{
    console.log('delete',_id);
    // fetch(`http://localhost:5000/addCraft/${_id}`,{
    //           method:'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data =>{
    //           console.log(data)
    //           if(data.deletedCount > 0){
    //             alert('deleted success')
    //           }
    //         })
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
         fetch(`http://localhost:5000/addCraft/${_id}`,{
            method:'DELETE'
          })

          .then(res => res.json())
          .then(data =>{
              console.log(data);
              if(data.deletedCount > 0){
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your cart has been deleted.",
                      icon: "success"
                    });
                    
              }
          })
      }
    });
   

  }


  const {
    image,
    item_name,
    subcategory_Name,
    short_description,
    price,
    rating,
    processing_time,
    customization,
    stockStatus,
    _id
  } = myCard;
  return (
    <div className="my-5">
      <div className="hero bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-2xl mx-auto bg-sky-100 rounded-xl">
        <div className="flex-1">
            <h1 className="text-2xl font-bold">{item_name}</h1>
            <p className="py-2">{short_description}</p>
          <div className="flex">
          <button className="mr-8 btn btn-primary">Updated</button>
          <button onClick={()=> handleDelete(_id)} className="btn btn-primary">Delete</button>
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



 // .then((result) => {
    //   if (result.isConfirmed) {
    
    //       // delete id
          
          // fetch(`http://localhost:5000/addCraft/${_id}`,{
          //   method:'DELETE'
          // })
    // fetch(`http://localhost:5000/addCraft/${_id}`,{
    //   method:'DELETE'
    // })

    // .then(res =>res.json())
    // .then(data =>{
    //   console.log(data)
    //   if (data.deletedCount > 0) {
    //     console.log("deleted successfully");
    //     swal("Well", "Your updated coffee", "success");
    //   }
    // }