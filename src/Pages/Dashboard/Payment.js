import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

 const stripePromise = loadStripe('pk_test_51L0iYbHgcyWlDX98TNiADfw3LJxCEDM4jnXBwrAhugRqjqDfpyfVXKZ1ufi69SM8AeXJZhO9RFHJ720EP95o4CR900UWzXN4eO');

const Payment = () => {

    const { id } = useParams();
    const url = `https://auto-parts-m2h1.onrender.com/order/${id}`;
    const { data: order, isLoading, } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='bg-secondary'>
            <h2 className='text-2xl text-primary font-semibold p-5'>Make Your Payment Here</h2>
            <div className='flex flex-col justify-center items-center p-10'>
                <div class="card-body mb-10 shadow-xl lg:w-1/2 ">
                    <h2 class="card-title"><span className='text-primary'>Hello, {order.buyerName} </span></h2>                    
                    <p>Please, Pay For <span className='text-orange-700 text-xl'>{order.item}</span></p>
                    <p>Total Amount: <span className='text-orange-700 text-xl'>${order.totalPrice}</span></p>
                </div>
                <div class="card-body mb-10 shadow-xl lg:w-1/2">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;