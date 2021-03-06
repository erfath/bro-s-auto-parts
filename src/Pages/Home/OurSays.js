import React from 'react';
import car from '../../images/car.jpg'

const OurSays = () => {
    return (
        <div class=" min-h-screen py-36  bg-secondary">
            <div class="hero-content flex-col lg:flex-row gap-20">
                <img src={car} class="rounded-lg shadow-2xl" />
                <div className='lg:text-left'>
                    <h1 class="lg:text-5xl text-3xl px-20 font-bold lg:mb-0">Let us Handle Your Business <span className='text-primary'>Professionally</span></h1>
                    <p class=" p-20">We are a Manufacturer of Car parts and others accessoris. We have huge stock of different items. We can supply the best products to you. Grow Your buisness and be the best Company</p>
                    <div class="stats bg-secondary flex justify-between lg:px-16">
                        <div class="stat">
                            <div class="stat-value text-primary">894+</div>
                            <div class="stat-desc text-neutral text-xl">Happy Company</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value text-primary">178+</div>
                            <div class="stat-desc text-neutral text-xl">Parts And Accessories</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSays;