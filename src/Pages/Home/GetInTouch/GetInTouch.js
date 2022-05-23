import React from 'react';
import Button from '../../Shared/Button';

const GetInTouch = () => {
    return (
        <div class="hero  bg-secondary">

        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h2 className='text-center text-black text-3xl m-16 font-bold'>Get in Touch</h2>
                <div className='flex gap-10 mb-5'>
                    <div >

                        <input type="text" placeholder="First Name" class="input w-full text-black max-w-xs " />
                    </div>
                    <div>

                        <input type="text" placeholder="Last Name" class="input w-full text-black max-w-xs" />
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div class="form-control">

                        <input type="text" placeholder="Email Address" class="input text-black w-full max-w-xs" />
                    </div>
                    <div class="form-control">

                        <input type="text" placeholder="Phone Number" class="input w-full text-black max-w-xs " />
                    </div>
                </div>
                <div class="form-control">

                    <textarea type="text" placeholder="Your Message" class="input text-black mt-5" />
                </div>
                <div class="form-control mb-20 mt-6">
                   <Button>Send Messages</Button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GetInTouch;