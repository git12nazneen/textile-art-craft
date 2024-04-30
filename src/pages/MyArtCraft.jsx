

import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCard from '../components/MyCard';
import LotiReact from '../components/LotiReact';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import Pagetitle from '../components/Pagetitle';

const MyArtCraft = () => {
    const {user} = useContext(AuthContext)
    const [cards, setCards] = useState([]);
    const myCards = useLoaderData();
    const [currentUserEmail, setCurrentUserEmail] = useState(null)
    // const [filterOption, setFilterOption] = useState('all'); // Default option is 'all'



    useEffect(()=>{
        setCurrentUserEmail(user.email)
    }, [setCurrentUserEmail])

    console.log(currentUserEmail)

    useEffect(() => {
        setCards(myCards);
    }, [myCards]);

// // Filter cards based on the selected option
// useEffect(() => {
//     if (filterOption === 'all') {
//         setCards(myCards);
//     } else {
//         setCards(myCards.filter(card => card.customization === filterOption));
//     }
// }, [filterOption, myCards]);


// useEffect(()=>{
//     const sortedCard = myCards.sort((a,b)=>{
//         return a.customization.localCompare(b.customization)
//     })
// }, [myCards])


    const handleDelete = _id =>{
            console.log('delete',_id);
           
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
                 fetch(`https://art-craft-server-psi.vercel.app/addCraft/${_id}`,{
                    method:'DELETE'
                  })
        
                  .then(res => res.json())
                  .then(data =>{
                      console.log(data);
                      if(data.deletedCount > 0){
                        setCards(prevCards => prevCards.filter(card => card._id !== _id));
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
   
//  // Handler for changing the filter option
//  const handleFilterChange = event => {
//     const selectedOption = event.target.value;
//     // Update the filter option state
//     setFilterOption(selectedOption);

//     // Filter cards based on the selected option
//     if (selectedOption === 'all') {
//         setCards(myCards);
//     } else {
//         setCards(myCards.filter(card => {
//             // Assuming card.customization contains 'option1' or 'option2'
//             return card.customization === selectedOption;
//         }));
//     }
// };

    return (
        <div className=' max-w-6xl mx-auto bg-white my-10'>
             <Pagetitle title='My craft'></Pagetitle>
            <LotiReact></LotiReact>
       

          {/* Dropdown menu for filter */}
          {/* <div className="my-4">
                <label htmlFor="filter">Filter by Customization:</label>
                <select id="filter" value={filterOption} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="option1">Yes</option>
                    <option value="option2">No</option>
                  
                </select>
            </div> */}


            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2  mx-auto">
                {cards.map(card => card.email === user.email && (
                    <MyCard
                        key={card._id}
                        myCard={card}
                        handleDelete={handleDelete} 
                    />
                ))}
            </div>
           
        </div>
    );
};

export default MyArtCraft;