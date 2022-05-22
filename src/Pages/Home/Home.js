import React from 'react';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Banner2 from './Banner2/Banner2';

import Items from './Items';
import OurSays from './OurSays';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Banner2></Banner2>
            <OurSays></OurSays>
            <Footer></Footer>
        </div>
    );
};

export default Home;