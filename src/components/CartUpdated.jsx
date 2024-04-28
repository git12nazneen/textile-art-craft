import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CartUpdated = () => {

    const loadedCraft = useLoaderData()

    return (
        <div>
            loded craft{loadedCraft.first_name}
        </div>
    );
};

export default CartUpdated;