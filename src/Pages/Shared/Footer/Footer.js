import React from 'react';
import mapPin from '../../../images/icon/map-pin-2-fill.png'
import logo1 from '../../../images/icon/Vector.png'
import logo2 from '../../../images/icon/Vector-1.png'
import logo3 from '../../../images/icon/Vector-2.png'
import logo4 from '../../../images/icon/Vector-3.png'

const Footer = () => {
    return (
        <footer class="footer mt-10 p-10 bg-primary flex flex-col items-center text-neutral-content ">
            <div className='lg:flex lg:flex-row flex flex-col'>
                <div className='text-left m-10'>
                    <h2 className='text-white text-xl font-bold'><img style={{ height: '26px' }} src={mapPin} alt="" />Address</h2>
                    <p className='text-white'>H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh </p>
                </div>
                <div className='text-white m-10'>
                    <h2 className='text-white text-xl font-bold'>Company</h2>
                    <div className='flex flex-col'>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                </div>
                <div className='text-white m-10'>
                    <h2 className='text-white text-xl font-bold'>Quick links</h2>
                    <div className='flex flex-col'>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                </div>
                <div className='text-white m-10'>
                    <h2 className='text-white text-xl font-bold'>About Us</h2>
                    <div className='flex flex-col'>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                       
                    </div>
                </div>
            </div>

            <div className='text-center'>
            <div className='flex ml-24 mt-2 gap-4'>
                            <img style={{ height: '26px' }} src={logo1} alt="" />
                            <img style={{ height: '26px' }} src={logo2} alt="" />
                            <img style={{ height: '26px' }} src={logo3} alt="" />
                            <img style={{ height: '26px' }} src={logo4} alt="" />

                        </div>
                <p className='text-white'>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;