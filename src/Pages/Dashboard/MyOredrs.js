import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOredrs = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?buyerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => setOrders(data));
        }
    }, [user])


    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: "DELETE",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`Canceled Your Order`)
                    }
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }

    return (
        <div>
            <h2 className='text-2xl text-primary font-semibold p-5'>Total Order: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table lg:w-full">

                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Item</th>
                            <th>Total Amount</th>
                            <th>Order Status</th>
                            <th>Payment</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.item}</td>
                                <td>{order.totalPrice}</td>
                                <td>{!order.paid && <p>Placed</p>}
                                    {order.paid && <p className='text-green-600'>Shipped</p>}
                                </td>
                                <td>
                                    {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-sm btn-primary border-0 text-white hover:bg-info'>Pay</Link>}
                                    {(order.totalPrice && order.paid) && <span className='text-green-600 font-bold'>Paid</span>}
                                </td>
                                <td>
                                    {!order.paid && <button onClick={() => handleDelete(order._id)} className='btn btn-link btn-sm text-error'>Cancel</button>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOredrs;