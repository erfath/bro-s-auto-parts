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
    return (
        <div className='min-h-screen lg:flex justify-center items-center p-5'>
            <div class="card bg-base-100 shadow-xl  image-full">
                <figure><img src={item.icon} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white">{item.name}</h2>
                    <div>
                        <p className='text-white'>Min. Order: {item.minOrder} </p>
                        <p className='text-white'>Available Stock: {item.available} </p>
                    </div>
                    <input type="text" placeholder="Type here" value={user.displayName} class="input input-ghost text-black font-bold w-full max-w-xs" disabled  />
                    <input type="text" placeholder="Type here" value={user.email} class="input input-ghost text-black font-bold w-full max-w-xs" disabled  />
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;