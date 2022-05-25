import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fb from '../../images/icon/Vector.png'
import google from '../../images/icon/Vector-4.png'
import Button from '../Shared/Button';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken'

const Register = () => {
    const [createUserWithEmailAndPassword, user,
        loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [token] = useToken(user || gUser)

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    let errorElement;

    if (error || gError || uError) {
        errorElement = <p className='text-red-500 text-center'> <small>{error?.message || gError?.message || uError?.message}</small></p>
    }

    if (token) {
         navigate('/')
    }

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }
    return (
        <div>
            <div class="hero min-h-screen bg-secondary">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div class="text-center mt-2">
                            <h1 class="text-4xl font-bold">Create an Account</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} class="card-body w-96">
                            <div class="form-control">

                                <input type="text" placeholder="Your Name" class="input" {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name Required'
                                    },
                                })} />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">

                                <input type="email" placeholder="Email" class="input" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email Required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Use a Valid Email'
                                    }
                                })} />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">

                                <input type="password" placeholder="Password" class="input"  {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'You should use minimum 6 character or longer'
                                    }
                                })} />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                </label>
                            </div>
                            {errorElement}
                            <div class="form-control">
                                <input className='btn btn-primary w-full max-w-xs text-white' value="Sign up" type="submit" />
                            </div>
                            <label class="label">
                                <p>Already Have An Account?</p><Link to='/login' class="label-text-alt link link-hover text-sm text-primary">Login</Link>
                            </label>
                            <div class="divider">OR</div>
                            <div>
                                <button onClick={() => signInWithGoogle()} className='btn btn-outline hover:bg-primary w-80 flex rounded-3xl p-2 font-semibold'> <span><img style={{ height: '32px' }} src={google} alt="" /></span><span className='ml-10'>Continue With Google</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;