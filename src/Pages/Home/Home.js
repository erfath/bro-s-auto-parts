import React from 'react';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Banner2 from './Banner2/Banner2';
import Commitment from './Commitment';
import GetInTouch from './GetInTouch/GetInTouch';
import Items from './Items';
import OurSays from './OurSays';
import Testimonials from './Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Banner2></Banner2>
            <OurSays></OurSays>
            <Testimonials></Testimonials>
            <Commitment></Commitment>
            <GetInTouch></GetInTouch>
            <Footer></Footer>
        </div>
    );
};

export default Home;