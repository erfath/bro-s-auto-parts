import React from 'react';
import img1 from '../../../images/curosel/one.jpg'
import img3 from '../../../images/curosel/three.jpg'
import img2 from '../../../images/curosel/two.jpg'
import img4 from '../../../images/curosel/four.jpg'

import './Banner.css'
const Banner = () => {
    return (


        <div class="carousel w-full">

            <div id="slide1" class="carousel-item  relative w-full">
            <h3 className='lg:text-5xl font-bold text-nutral lg:mt-20 lg:ml-20 ml-16  carousel-caption'>Feel The Great <br /> Power With Latest <br /> <span className='text-primary'>Engine Oil</span> </h3>
                
                <img src={img3} class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <h3 className='lg:text-5xl font-bold text-nutral lg:mt-20 lg:ml-20 ml-16  carousel-caption'>Get Free shipping <br /> On The sets Of <br /> <span className='text-primary'>New Tyres</span></h3>
                <img src={img2} class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
            <h3 className='lg:text-5xl font-bold text-nutral lg:mt-20 lg:ml-20 ml-16  carousel-caption'>Collect The Best <br /> Parts Of <br /> <span className='text-primary'>Shock Absorbers</span></h3>
                <img src={img1} class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src={img4} class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;