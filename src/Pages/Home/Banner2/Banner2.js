import React from 'react';
import light from '../../../images/1_4.jpg'
import Button from '../../Shared/Button';
import './Banner2.css'

const Banner2 = () => {
    return (
        <div class="card lg:card-side shadow-xl">
            <div class="card-body ">
                <h2 class="card-title"><h3 className='text-left lg:text-2xl  '>Automotive Led Xenon <span className='text-primary lg:text-3xl font-bold'> Headlight Kits</span></h3> </h2>
                <p>We offer you only the best quality Xenon headlight kits</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary btn-sm text-white hover:bg-info border-0">Discover Now</button>
                </div>
            </div>
            <div><img className='lg:ml-20' src={light} alt="Album" /></div>
        </div>
    );
};

export default Banner2;