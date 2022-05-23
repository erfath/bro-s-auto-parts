import React from 'react';
import useItems from '../../Hooks/useItems';
import ManageItemsRow from './ManageItemsRow';

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th className='text-2xl'>SL.</th>
                        <th className='text-2xl'>Name</th>
                        <th className='text-2xl'>Image</th>
                        <th className='text-2xl'>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-secondary'>
                    {
                        items.map((item, index)=> <ManageItemsRow
                        key={item._id}
                        index={index}
                        item={item}
                        ></ManageItemsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;