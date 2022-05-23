import React from 'react';
import { NavLink } from 'react-router-dom';
import carlogo from '../../images/car-logo.png'

const Navbar = ({ children }) => {
  return (
    <div class="drawer drawer-end  ">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar sticky top-0 z-50 opacity-90 bg-primary text-white ">
          <div class="flex-1 px-2 mx-2 text-3xl"> <img style={{ height: '120px' }} src={carlogo} alt="" /> Bro's Auto Parts</div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li><NavLink to='/home'>Home</NavLink></li>
              <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
              <li><NavLink to='/myOrders'>My Orders</NavLink></li>
              <li><NavLink to='/review'>Add A Review </NavLink></li>
              <li><NavLink to='/profile'>My Profile </NavLink></li>
              <li><NavLink to='/manageOrders'>Manage All Orders </NavLink></li>
              <li><NavLink to='/addProduct'>Add a Product</NavLink></li>
              <li><NavLink to='/manageProducts'>Manage Products</NavLink></li>
              <li><NavLink to='/login'> Login </NavLink></li>
            </ul>
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
        </div>
        {/* <!-- Page content here -->
          Content */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;