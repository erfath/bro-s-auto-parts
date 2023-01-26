import React, { useEffect, useState } from 'react';

const useItems = (quantity) => {

    
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://auto-parts-m2h1.onrender.com/item')
            .then(res => res.json())
            .then(data => {
                if(quantity){
                    setItems(data.slice(0, 6))
                }
                else{
                    setItems(data)
                }
                })
    }, [])
    return [items, setItems];
};

export default useItems;