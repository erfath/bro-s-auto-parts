import React from 'react';

const ManageItemsRow = ({ item, index }) => {
    const { name, icon, _id } = item;
    return (
            <tr className='hover'>
                <th className='text-xl lg:font-bold'>{index+1}</th>
                <td className='text-xl lg:font-bold'>{name}</td>
                <td><img className='lg:w-40 w-20' src={icon} alt="" /></td>
                <td><button className='btn btn-primary lg:btn-sm btn-xs text-white hover:bg-red-500 border-0'>Delete</button></td>
            </tr>
    );
};

export default ManageItemsRow;