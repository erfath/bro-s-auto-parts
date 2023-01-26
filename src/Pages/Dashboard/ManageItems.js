import React from 'react';
import { toast } from 'react-toastify';
import useItems from '../../Hooks/useItems';

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            const url = `https://auto-parts-m2h1.onrender.com/item/${id}`
            fetch(url, {
                method: "DELETE",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`Successfully Deleted`)
                    }
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    return (
        <div class="overflow-x-auto">
            <h2 className='text-3xl text-primary text-center font-semibold mb-2'>Manage All Items Here</h2>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th className='lg:text-2xl'>SL.</th>
                        <th className='lg:text-2xl'>Name</th>
                        <th className='lg:text-2xl'>Image</th>
                        <th className='lg:text-2xl'>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-secondary'>
                    {
                        items.map((item, index) => <tr className='hover'>
                            <th className='text-xl lg:font-bold'>{index + 1}</th>
                            <td className='text-xl lg:font-bold'>{item.name}</td>
                            <td><div class="avatar">
                                <div class="w-24 rounded-xl">
                                    <img src={item.icon} />
                                </div>
                            </div></td>
                            <td><button onClick={() => handleDelete(item._id)} className='btn btn-primary lg:btn-sm btn-xs text-white hover:bg-red-500 border-0'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;