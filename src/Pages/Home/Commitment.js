import React from 'react';
import img1 from '../../images/icon/rocket.png'
import img2 from '../../images/icon/clock.png'
import img3 from '../../images/icon/money.png'
import img4 from '../../images/icon/support.png'

const Commitment = () => {
    return (
        <div className='lg:flex lg:flex-row flex-col justify-evenly lg:h-60 mt-20 p-20 lg:mb-0 items-center text-white bg-primary'>
            <div className='flex items-center mb-5'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className='ml-2'>
                    <h2 className='text-xl font-bold'>Free Shipping</h2>
                    <p>On Oreder Over $500</p>
                </div>
            </div>
            <div className='flex items-center mb-5'>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div className='ml-2'>
                    <h2 className='text-xl font-bold'>Order Online</h2>
                    <p>Easy 24/7 Online Ordering</p>
                </div>
            </div>
            <div className='flex items-center mb-5'>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div className='ml-2'>
                    <h2 className='text-xl font-bold'>Buy and Save</h2>
                    <p>For All Special Collections</p>
                </div>
            </div>
            <div className='flex items-center mb-5'>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div className='ml-2'>
                    <h2 className='text-xl font-bold'>Safe and Security</h2>
                    <p>We Provide 100% Secure</p>
                </div>
            </div>
        </div>
    );
};

export default Commitment;