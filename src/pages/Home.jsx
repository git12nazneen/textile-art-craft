import React from 'react';
import CardItems from '../components/CardItems';
import Trusted from '../components/Trusted';
import Update from '../components/Update';
import Subscribe from '../components/Subscribe';
import Subcategory from '../components/Subcategory';
import Banner from '../components/Banner';
import CategoriesSecHeading from '../components/CategoriesSecHeading';
import CartSecHeading from '../components/CartSecHeading';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Trusted></Trusted>
            <CartSecHeading></CartSecHeading>
            <CardItems></CardItems>
            <CategoriesSecHeading></CategoriesSecHeading>
            <Subcategory></Subcategory>
            <Subscribe></Subscribe>
            <Update></Update>
        </div>
    );
};

export default Home;