import React from 'react';
import Button from '../../Shared/Button';
import './item.css'

const item = ({ item }) => {
    const { id, name, description, icon, price, available, minOrder } = item;
    return (
        <div class="card bg-base-100 shadow-xl ">
            <figure><img src={icon} alt="Shoes" /></figure>
            <div class="divider"></div>
            <div class="card-body text-center mt-0">
                <h2 class="text-center text-2xl font-semibold">{name}</h2>
                <p>{description}</p>
                <p className='font-semibold'>Price: <span className='text-orange-500'>${price}</span></p>
                <div className='text-left flex justify-between'>
                    <div>
                        <p>Available Stock: {available} </p>
                        <p>Min. Order: {minOrder} </p>
                    </div>
                    <div class="card-actions ">
                        <Button>Purchase Now</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default item;