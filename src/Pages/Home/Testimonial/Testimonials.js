import React from 'react';
import img1 from '../../../images/people/people1.png'
import img2 from '../../../images/people/people2.png'
import img3 from '../../../images/people/people3.png'

const Testimonials = () => {
    return (
       <div>
           <h2 className='text-4xl text-primary text-center p-10 font-bold'>Testimonials</h2>
            <div class="h-96 carousel carousel-vertical rounded-box text-center flex items-center">                     
            <div class="carousel-item h-full flex flex-col">
                <div class="avatar text-center">
                    <div class="w-24 rounded-full">
                        <img src={img1} />
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-bold text-primary'>John Kabir</h2>
                    <p className='font-semibold'>CEO, Robi</p>
                    <p>I am very happy to got your Products. <br /> My company got huge profit by <br /> selling your all parts. Customers are happy.</p>
                </div>
            </div>
            <div class="carousel-item h-full flex flex-col">
                <div class="avatar text-center">
                    <div class="w-24 rounded-full">
                        <img src={img2} />
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-xl text-primary'>Naila Nayem</h2>
                    <p className='font-semibold'>CEO, Banglalink</p>
                    <p>I am very happy to got your Products. <br /> My company got huge profit by <br /> selling your all parts. Customers are happy.</p>
                </div>
            </div>
            <div class="carousel-item h-full flex flex-col">
                <div class="avatar text-center">
                    <div class="w-24 rounded-full">
                        <img src={img3} />
                    </div>
                </div>
                <div> 
                    <h2 className='font-bold text-xl text-primary'>Juliet D Gea</h2>
                    <p className='font-semibold'>CEO, AIrtel</p>
                    <p>I am very happy to got your Products. <br /> My company got huge profit by <br /> selling your all parts. Customers are happy.</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Testimonials;