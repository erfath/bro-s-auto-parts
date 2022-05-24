import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Item from './Item/Item'

const Items = () => {
    const [items, setItems] = useItems([]);
    const navigate = useNavigate();
    const navigateToManageItem = () => {
        navigate('/manageItems')
    }
    return (
        <div className='bg-secondary'>
            <h1 className='text-4xl text-left text-primary font-bold pt-10 mb-10 lg:mx-16 '>Popular Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:mx-16'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className='text-right'>
                <button onClick={() => navigateToManageItem()} className='btn  text-primary text-right m-16 btn-link'>Explore More</button>
            </div>
        </div>
    );
};

export default Items;