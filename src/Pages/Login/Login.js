import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../images/icon/Vector.png'
import google from '../../images/icon/Vector-4.png'
import Button from '../Shared/Button';
const Login = () => {
    return (
        <div>
        <div class="hero min-h-screen bg-secondary">
            <div class="hero-content flex-col lg:flex-row-reverse">

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div class="text-center mt-2">
                        <h1 class="text-4xl font-bold">Login now!</h1>
                    </div>
                    <div class="card-body w-96">
                        <div class="form-control">

                            <input type="email" placeholder="Email" class="input " />
                        </div>
                        <div class="form-control">

                            <input type="password" placeholder="password" class="input " />                              
                        </div>
                        <div class="form-control mt-6">
                            <Button>Login</Button>
                        </div>
                        <label class="label">
                                <p>Don't Have An Account?</p><Link to='/register' class="label-text-alt link link-hover text-sm text-primary">Create An Account</Link>
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

export default Login;