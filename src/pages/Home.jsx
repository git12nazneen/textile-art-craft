import React from 'react';
import CardItems from '../components/CardItems';
import Trusted from '../components/Trusted';
import Update from '../components/Update';
import Subscribe from '../components/Subscribe';
import Subcategory from '../components/Subcategory';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Trusted></Trusted>
            <CardItems></CardItems>
            <Subcategory></Subcategory>
            <Subscribe></Subscribe>
            <Update></Update>
        </div>
    );
};

export default Home;