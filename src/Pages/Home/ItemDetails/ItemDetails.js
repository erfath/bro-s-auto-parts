import { success } from 'daisyui/src/colors/colorNames';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    const navigate = useNavigate();

    const { _id, name, icon, price, minOrder, available } = item;
    const min = minOrder;
    const max = available;

    const [value, setValue] = useState(1);

    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        if (value < min) {
            return console.error(`You have to order Minimum ${minOrder} Pieces`);
        }
        else if (value > available) {
            return console.error(`You Can order only ${minOrder} Pieces`)
        }
        else {
            setValue(value);
        }


    };
    const handleOrder = (event) => {
        event.preventDefault();
        const orderQuantity = event.target.order.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const totalPrice = (price*orderQuantity);
        console.log(address, phone)
        const order = {
            orderQuantity,
            itemId: _id,
            item: name,
            buyerName: user.displayName,
            buyerEmail: user.email,
            phone,
            address,
            totalPrice,
            
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (success) {
                    toast('Order Pending, Please Pay Here')
                    navigate('/dashboard/orders')
                }
            })
    }
    return (
        <div class="hero min-h-screen bg-secondary">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold text-center text-primary">Place Your Order Here!</h1>
                    <img src={item.icon} alt="" />
                    <div className='font-semibold text-2xl'>
                        <h2 className='text-3xl text-primary'>Item Name: {name}</h2>
                        <p>Price: <span className='text-orange-700'> ${price} </span></p>
                        <p>Min. Order: <span className='text-orange-700'>{minOrder}</span> Pieces</p>
                        <p>Available Stock: <span className='text-orange-700'>{available} </span>Pieces </p>
                    </div>
                </div>
                <form onSubmit={handleOrder} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <input onChange={handleChange} value={value} type="number" name='order' placeholder="Order Quantity" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <input type="text" name='name' readOnly value={user.displayName} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" name='email' readOnly value={user.email} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <input type="text" name='address' placeholder="Address" class="input input-bordered" required />
                        </div>
                        <div class="form-control mt-6">
                            <input type="submit" value="Submit" className='btn btn-primary text-white hover:bg-info border-0' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ItemDetails;