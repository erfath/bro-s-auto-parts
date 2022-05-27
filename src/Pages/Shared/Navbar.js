import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import carlogo from '../../images/car-logo.png'

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  }
  return (
    <div class="drawer drawer-end  ">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar sticky top-0 z-50 bg-primary opacity-95 h-12 text-white ">
          <div class="flex-1 px-2 mx-2 font-serif font-bold text-3xl"> <img style={{ height: '120px' }} src={carlogo} alt="" /> Bro's Auto Parts</div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li className='font-bold '><NavLink to='/home'>Home</NavLink></li>

              {
                user && <>
                  <li className='font-bold '><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </>
              }

              <li className='font-bold '><NavLink to='/blogs'>Blogs</NavLink></li>
              <li className='font-bold '><NavLink to='/portfolio'>My Portfolio</NavLink></li>

              <li className='font-bold '>{
                user

                  ?
                  <span><button className='btn btn-info hover:btn-error text-white' onClick={handleSignOut}>Logout</button><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>{user.displayName}</span>

                  :

                  <NavLink to='/login'> Login </NavLink>}</li>

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
          <li><NavLink to='/home'>Home</NavLink></li>
          {
            user && <>
              <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            </>
          }
          <li><NavLink to='/blogs'>Blogs</NavLink></li>
          <li><NavLink to='/portfolio'>My Portfolio</NavLink></li>
          <li>{
            user

              ?
              <span><button onClick={handleSignOut}>Logout</button><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>{user.displayName}</span>
              :

              <NavLink to='/login'> Login </NavLink>}</li>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;