import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <div className='flex justify-between p-1'>
                    <h2 className='text-3xl text-primary font-bold'>My Dashboard</h2>
                    <label for="dashboard-drawer" class="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
                </div>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin && <>
                        <li><Link to='/dashboard/orders'>My Oredrs</Link></li>
                        <li><Link to='/dashboard/review'>My Review</Link></li>
                    </>
                    }

                    {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addItem'>Add Item</Link></li>
                        <li><Link to='/dashboard/manageItems'>Manage Items</Link></li>
                        <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                    </>

                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;