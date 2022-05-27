import { success } from 'daisyui/src/colors';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);

        

    const handleSubmit = event => {
        event.preventDefault();
        const education = event.target.education.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const social = event.target.social.value;
        const userInfo = {
            name: user.displayName,
            email: user.email,
            education,
            address,
            phone,
            social,
        }
        fetch('http://localhost:5000/userInfo', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    toast.success('Profile Updated Successfully');

                }
                else {
                    toast.error("Sorry! Failed to Update")
                }

            })

    }

    return (
        <div>
            <h2 className='font-serif font-semibold'>Name: <span className='text-2xl text-orange-700'>{user.displayName}</span></h2>
            <h2 className='font-serif font-semibold'>Email Address: <span className='text-2xl text-orange-700'>{user.email}</span></h2>
            <div class="hero min-h-fit ">

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <h2 className='text-3xl text-primary text-center font-semibold mb-2 '>Update Profile</h2>
                    <form onSubmit={handleSubmit} class="card-body w-96 shadow-2xl ">
                        <div class="form-control">
                            <input type="text" value={user.displayName} class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <input type="text" value={user.email} class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <input type="text" placeholder='Education Institute' name='education' class="input input-bordered" />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control">

                            <input type="number" placeholder="Phone" name='phone' class="input input-bordered" />
                            <label class="label">

                            </label>
                        </div>

                        <div class="form-control">
                            <input type="text" placeholder='Any Social URL' name='social' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" placeholder='Address' name='address' class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <input className='btn btn-primary w- hover:btn-info font-bold max-w-xs text-white' value="Add" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;