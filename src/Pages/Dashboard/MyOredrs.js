import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
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
                    console.log('res', res)
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.item}</td>
                                <td>{order.totalPrice}</td>
                                <td>$$$</td>
                                <td><button className='btn btn-sm btn-primary border-0 text-white hover:bg-info'>Pay</button> <button className='btn btn-link btn-sm text-error'>Cancel</button> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOredrs;