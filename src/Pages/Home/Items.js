import React, { useEffect, useState } from 'react';
import Item from './Item'

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className='bg-secondary'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    items.map(item=> <Item
                    key={item.id}
                    item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;