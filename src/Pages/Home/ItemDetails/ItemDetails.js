import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    const handleOrder =(event)=>{
        event.preventDefault();
        const orderQuantity = event.target.order.value;
        console.log(orderQuantity, item.name, item.price)
    }
    return (
        <div class="hero min-h-screen bg-secondary">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold text-center text-primary">Place Your Order Here!</h1>
                    <img src={item.icon} alt="" />
                    <div className='font-semibold text-2xl'>
                        <h2 className='text-3xl text-primary'>Item Name: {item.name}</h2>
                        <p>Price: <span className='text-orange-700'> ${item.price} </span></p>
                        <p>Min. Order: <span className='text-orange-700'>{item.minOrder}</span> Pieces</p>
                        <p>Available Stock: <span className='text-orange-700'>{item.available} </span>Pieces </p>
                    </div>
                </div>
                <form onSubmit={handleOrder} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <input type="text" name='order' placeholder="Order Quantity" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" name='name' readOnly value={user.displayName} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" name='email' readOnly value={user.email}  class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" name='address' placeholder="Address" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <input type="submit" value="Submit" className='btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        // <div className='min-h-screen lg:flex justify-center items-center p-5'>
        //     <div class="card bg-base-100 shadow-xl  image-full">
        //         <figure><img src={item.icon} alt="Shoes" /></figure>
        //         <div class="card-body">
        //             <h2 class="card-title text-white">{item.name}</h2>
        //             <div>
        //                 <p className='text-white'>Min. Order: {item.minOrder} </p>
        //                 <p className='text-white'>Available Stock: {item.available} </p>
        //             </div>
        //             <div className='mt-20'>
        //                 <input type="text" placeholder="Order Quantity" class="input outline- w-full max-w-xs" />
        //                 <input type="text" placeholder={user.displayName} class="input input-ghost text-black font-bold w-full max-w-xs" disabled />
        //                 <input type="text" placeholder={user.email} class="input input-ghost text-black font-bold w-full max-w-xs" disabled />
        //             </div>
        //             <div class="card-actions justify-end">
        //                 <button class="btn btn-primary">Buy Now</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ItemDetails;