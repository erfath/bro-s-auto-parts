import React from 'react';
import img1 from '../../images/curosel/one.jpg'
import img3 from '../../images/curosel/three.jpg'
import img2 from '../../images/curosel/two.jpg'

import './Banner.css'
const Banner = () => {
    return (
        <div class="carousel w-full">

            <div id="slide1" class="carousel-item  relative w-full">
                <h3 className='lg:text-5xl text-primary lg:mt-20 lg:ml-20 ml-16  carousel-caption'>Collect The Best <br /> Parts Of <br /> Shock Absorbers</h3>
                <img src={img1} class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
            <h3 className='lg:text-5xl text-primary lg:mt-20 lg:ml-20 ml-16  carousel-caption'>Get Free shipping <br /> On The sets Of <br /> New Tyres</h3>
                <img src={img2} class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
            <h3 className='lg:text-5xl text-primary lg:mt-20 lg:ml-20 ml-16  carousel-caption'>Feel The Greatest <br /> Power With Latest <br /> Engine Oil </h3>
                <img src={img3} class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;