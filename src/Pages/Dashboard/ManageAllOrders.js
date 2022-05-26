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
                            <td>{order.paid}</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;