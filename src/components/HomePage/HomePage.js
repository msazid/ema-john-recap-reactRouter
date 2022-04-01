import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/banner.jpg'
const HomePage = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div className='flex  mx-auto  my-0 md:my-10 md:justify-center items-center p-5 md:p-0'>
                <div className='text-left'>
                    <span className='text-orange-400'>Sale up to 70% off</span>
                    <h1 className='text-5xl font-medium my-2'>New Collection For Fall</h1>
                    <p className='text-left mb-3'>Discover all the new arrivals of ready-to-wear collection.</p>
                    <Link to='/products' className='btn bg-orange-500 text-white py-2 px-3 rounded'>Explore More</Link>
                </div>
            </div>
            <div className=' mx-auto md:mx-0  my-5 md:my-10'>
                <img src={bannerImg} className='w-74' alt="" />
            </div>
        </div>
    );
};

export default HomePage;