import React from 'react';
import { Link } from 'react-router-dom';
import eru from '../../images/DSC_3172.JPG'
import Footer from '../Shared/Footer/Footer';
const MyPortfolio = () => {
    return (
        <div>
            <div className='flex justify-center items-center lg:pt-0 h-screen bg-secondary'>
                <div className=' py-36 px-10'>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-96' src={eru} alt="Album" /></figure>
                        <div class="card-body ml-10">
                            <h2 className='text-5xl'>Hi! I'm <span className='text-purple-800'>Erfath Parvez</span> </h2>
                            <p className='text-xl'>Student of   <span className='text-primary'>  Wuzhou University, Guangxi, China</span></p>
                            <p>I'm on my way to becoming a web developer. As a beginner, I have basic knowledge about <span className='font-semibold'>HTML5, CSS5, Bootstrap, TailwindCSS, JavaScript, ReactJS, NodeJS, MongoDB.</span> Trying to gather more knowledge in my journey to be a Web Developer. </p>
                            <div>
                                <p className='font-semibold'>My recent Projects live links</p>
                                <><a className='text-primary' href="https://the-lens-king.web.app/">https://the-lens-king.web.app/</a></>
                                <p ><a className='text-primary' href="https://tiny-zabaione-7f9535.netlify.app/home">https://tiny-zabaione-7f9535.netlify.app/home</a></p>
                            </div>
                            <div class="card-actions justify-end">
                                <Link to='/projects' class="btn btn-link btn-primary ">My Recent Projects<svg xmlns="http://www.w3.org/2000/svg" className="h-5 ml-1 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg></Link>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default MyPortfolio;