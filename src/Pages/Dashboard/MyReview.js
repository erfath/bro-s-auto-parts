import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const [review, setReview] = useState({})
    const handleSubmit = event => {
        event.preventDefault();
        const company = event.target.company.value;
        const feedback = event.target.feedback.value;
        const rating = event.target.rating.value;
        console.log(feedback, rating)
        const review = {
            name: user.displayName,
            company,
            feedback,
            rating,
        }
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Thanks For Your Review');                   
                }
              

            })

    }

    return (
        <div class="hero min-h-fit mt-10 ">

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <h2 className='text-3xl text-primary text-center font-semibold mb-2 '>Review</h2>
                <form onSubmit={handleSubmit} class="card-body w-96 shadow-2xl ">
                    <div class="form-control">
                        <input type="text" value={user.displayName} class="input input-bordered" />
                    </div>



                    <div class="form-control">
                        <input type="text" placeholder='Company Name' name='company' class="input input-bordered" />
                    </div>
                    <div class="form-control">

                        <input type="text" placeholder="Your Feedback " name='feedback' class="input input-bordered" />
                    </div>
                    <div class="form-control">
                    <input type="text" placeholder="Give us a rating out of 5 " name='rating' class="input input-bordered" />
                    </div>

                    <div class="form-control">
                        <input className='btn btn-primary w- hover:btn-info font-bold max-w-xs text-white mt-3' value="Add" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyReview;