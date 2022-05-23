import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../images/icon/Vector.png'
import google from '../../images/icon/Vector-4.png'
import Button from '../Shared/Button';


const Register = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-secondary">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div class="text-center mt-2">
                            <h1 class="text-3xl font-bold">Create An Account</h1>
                        </div>
                        <div class="card-body w-96">        
                            <div class="form-control">
                                <input type="text" placeholder="First Name" class="input " />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="Last Name" class="input " />
                            </div>
                            <div class="form-control">
                                <input type="email" placeholder="Email Address" class="input " />
                            </div>
                            <div class="form-control">
                                <input type="password" placeholder="Password" class="input " />
                            </div>
                            <div class="form-control mt-6">
                                <Button>Create An Account</Button>
                            </div>
                            <label class="label">
                                <p>Already Have An Account?<span><Link to='/login' class="label-text-alt link link-hover text-sm ml-2 text-primary text-black">Login</Link></span></p>
                            </label>
                            <div class="divider">OR</div>
                            <div>
                                <button className='border w-80 border-neutral flex rounded-3xl p-2 font-semibold'> <span><img style={{ height: '32px' }} src={google} alt="" /></span><span className='ml-10'>Continue With Google</span></button>
                            </div>
                            <div>
                                <button className='border w-80 border-neutral flex rounded-3xl p-2 font-semibold'> <span><img className='bg-base-content' style={{ height: '32px' }} src={fb} alt="" /></span><span className='ml-10'>Continue With Facebook</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;