import React from 'react';
import { toast } from 'react-toastify';

const ManageItemsRow = ({ item, index }) => {
    const { name, icon, _id } = item;
const handleDelete = id =>{
    fetch(`http://localhost:5000/item/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('deleted doctor', data)
            if(data.deletedCount){
                toast.success(`Successfully Deleted`)
            }
        })
    
};

    return (
        <tr className='hover'>
            <th className='text-xl lg:font-bold'>{index + 1}</th>
            <td className='text-xl lg:font-bold'>{name}</td>
            <td><div class="avatar">
                <div class="w-24 rounded-xl">
                    <img src={icon} />
                </div>
            </div></td>
            <td><button onClick={handleDelete} className='btn btn-primary lg:btn-sm btn-xs text-white hover:bg-red-500 border-0'>Delete</button></td>
        </tr>
    );
};

export default ManageItemsRow;