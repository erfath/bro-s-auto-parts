import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
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

    return (
        <div>
            <h2>All my Orders {orders.length}</h2>
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
                                <td>Pending</td>
                                <td>
                                    {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-sm btn-primary border-0 text-white hover:bg-info'>Pay</Link>}
                                    {(order.totalPrice && order.paid) && <span className='text-succes'>Paid</span>}
                                </td>
                                <td>{order.paid && <p>  </p>}
                                    {!order.paid && <Link to={``} className='btn btn-link btn-sm text-error'>Cancel</Link>}
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