import React from 'react';
import CardItems from '../components/CardItems';
import Trusted from '../components/Trusted';
import Update from '../components/Update';
import Subscribe from '../components/Subscribe';
// import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            
            {/* <Banner></Banner> */}
            <Trusted></Trusted>
            <CardItems></CardItems>
            <Subscribe></Subscribe>
            <Update></Update>
        </div>
    );
};

export default Home;