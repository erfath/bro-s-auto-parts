import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <div class="card glass pt-20">
                <figure><img src={notFound} alt="car!"/></figure>
                <div class="card-body">
                    <h2 class="text-2xl text-error text-center font-semibold">Oppppps! The Page You Are Looking For is Under Maintainence</h2> 
                    <p className=' text-right btn btn-link'><Link to='/'>Go Back To Home Page</Link></p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;