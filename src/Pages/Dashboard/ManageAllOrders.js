import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
    const { data: orders, isLoading } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold text-primary text-center mb-2">
                Manage All Orders From Here
            </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr >
                            <th className='text-xl'>sl.</th>
                            <th className='text-xl'>Buyer Name</th>
                            <th className='text-xl'>Items name</th>
                            <th className='text-xl'>Quantity</th>
                            <th className='text-xl'>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr className='hover'>
                            <th className='text-xl lg:font-bold'>{index + 1}</th>
                            <td className='text-xl lg:font-bold'>{order.buyerName}</td>
                            <td>{order.item}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{
                                (order.paid) && <div className='text-green-600 flex'>Done<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>}
                                {(!order.paid) && <div className='text-red-500 flex'>Pending <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                            
                            
                            }</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;