import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://auto-parts-m2h1.onrender.com/user', {
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
               List Of All Users
            </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr >
                            <th className='text-xl'>sl.</th>
                            <th className='text-xl'>User Email</th>
                            <th className='text-xl'>Make Admin</th>
                            <th className='text-xl'>Remove User</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow

                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;