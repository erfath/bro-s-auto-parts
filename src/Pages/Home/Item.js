import React from 'react';
import Button from '../Shared/Button';

const item = ({item}) => {
    const { id, name, description, icon, price} = item;
    return (
        <div class="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={icon} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <Button>Buy Now</Button>
                </div>
            </div>
        </div>
    );
};

export default item;