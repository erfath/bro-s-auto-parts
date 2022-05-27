import React from 'react';
import caurosel from '../../images/scrnsht/caurosel.PNG'
import inputF from '../../images/scrnsht/input filed.PNG'
import responsive from '../../images/scrnsht/responsive.PNG'
import footer from '../../images/scrnsht/footer.PNG'
import Footer from '../Shared/Footer/Footer';

const RecentProjects = () => {
    return (
        <div className='bg-secondary'>
            <h2 className='text-center lg:text-4xl text-violet-700 font-semibold p-10'>Here are Some Screenshot Of My Recent Projects</h2>
            <div className='mx-auto lg:w-1/2 mb-10'><img src={caurosel} alt="" />
                <p className='lg:text-3xl text-center font-semibold font-serif p-2 text-orange-600'>Caurosel</p>
            </div>

            <div className='lg:flex justify-around items-center min-h-screen'>
                <div className='mb-10'>
                    <p className='lg:text-3xl text-center font-semibold font-serif p-2 text-orange-600'>Input field with Background</p>
                    <img src={inputF} alt="" />
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <p className='lg:text-3xl text-center font-semibold font-serif p-2 text-orange-600'>Responsive UI</p>
                            <img style={{ height: '500px' }} src={responsive} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-centeh h-fit p-20'>
                <div>
                    <p className='lg:text-3xl text-center font-semibold font-serif p-2 text-orange-600'>Responsive footer</p>
                    <img src={footer} alt="" /></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RecentProjects;