import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../Shared/Button';
import './item.css'

const Item = ({ item }) => {
    const { _id, name, description, icon, price, available, minOrder } = item;

    const navigate = useNavigate();
    const navigateToItemDetails =(id) => {
        navigate(`/item/${id}`);
    }
    return (
        <div class="card bg-base-100 shadow-xl ">
            <figure><img className='w-80' src={icon} alt="Shoes" /></figure>
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
                        <button className='ntn btn-primary rounded-lg text-white hover:bg-info p-2' onClick={() => navigateToItemDetails(_id)}>Purchase Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Item;