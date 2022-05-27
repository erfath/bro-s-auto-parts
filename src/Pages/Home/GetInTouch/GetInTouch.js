import React from 'react';
import { toast } from 'react-toastify';

const GetInTouch = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const firstName = event.target.first.value;
        const lastName = event.target.last.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const message = event.target.message.value;

        console.log(firstName, message, lastName, email, phone);
        const comments = {
            firstName,
            lastName,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/comments', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    toast.success('Message sent to Manufacturer Successfully');
                }
                else {
                    toast.error("Sorry! Failed to send Message")
                }

            })

    }

    return (
        <div class="hero  bg-secondary">

            <div class="hero-content text-center text-neutral-content">
                <form onSubmit={handleSubmit} class="max-w-md">
                    <h2 className=' text-4xl text-primary p-10 font-bold'>Get in Touch</h2>
                    <div className='flex gap-10 mb-5'>
                        <div >

                            <input type="text" placeholder="First Name" name='first' class="input w-full text-black max-w-xs " />
                        </div>
                        <div>

                            <input type="text" placeholder="Last Name" name='last' class="input w-full text-black max-w-xs" />
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <div class="form-control">

                            <input type="text" placeholder="Email Address" name='email' class="input text-black w-full max-w-xs" />
                        </div>
                        <div class="form-control">

                            <input type="text" placeholder="Phone Number" name='phone' class="input w-full text-black max-w-xs " />
                        </div>
                    </div>
                    <div class="form-control">

                        <textarea type="text" placeholder="Your Message" name='message' class="input text-black mt-5" />
                    </div>
                    <div class="form-control mb-20 mt-6">
                        <input type="submit" value="Send Message" className='ntn btn-primary rounded-lg text-white hover:bg-info p-2' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;