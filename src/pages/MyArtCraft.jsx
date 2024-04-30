

import React, { useState, useEffect, useContext } from 'react';
import MyCard from '../components/MyCard';
import LotiReact from '../components/LotiReact';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import Pagetitle from '../components/Pagetitle';
import { useLoaderData } from 'react-router-dom';

const MyArtCraft = () => {
    const { user } = useContext(AuthContext);
    const [cards, setCards] = useState([]);
    const myCards = useLoaderData();
    const [currentUserEmail, setCurrentUserEmail] = useState(null);
    const [filterOption, setFilterOption] = useState('all'); // Default option is 'all'

    useEffect(() => {
        setCurrentUserEmail(user.email);
    }, [user.email]);

    useEffect(() => {
        setCards(myCards);
    }, [myCards]);

    const handleDelete = _id => {
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
                fetch(`https://art-craft-server-psi.vercel.app/addCraft/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setCards(prevCards => prevCards.filter(card => card._id !== _id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your cart has been deleted.",
                            icon: "success"
                        });
                    }
                });
            }
        });
    }

    const handleFilterChange = event => {
        const selectedOption = event.target.value;
        setFilterOption(selectedOption);
    };

    const filteredCards = cards.filter(card => {
        if (filterOption === 'all') {
            return true; 
        } else {
            return card.customization === filterOption;
        }
    });

    return (
        <div className='max-w-6xl mx-auto bg-white my-10'>
            <Pagetitle title='My craft' />
            <LotiReact />

      
            <div className="my-4">
                <label htmlFor="filter">Filter by Customization:</label>
                <select id="filter" value={filterOption} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

          
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2 mx-auto">
                {filteredCards.map(card => card.email === user.email && (
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
