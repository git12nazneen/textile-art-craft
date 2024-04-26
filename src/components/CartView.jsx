import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CartView = () => {
    const card = useLoaderData()

    const {name, img, description} = card;
    return (
        <div>
            <h1>{card.name}</h1>
        </div>
    );
};

export default CartView;