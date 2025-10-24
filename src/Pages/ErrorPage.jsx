import React from 'react';
import errorpage from '../assets/errorpage.png';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center text-center h-[70vh] px-4'>
                <img className='w-[130px] md:w-[420px]' src={errorpage} alt="" />
                <h1 className='text-4xl font-bold mb-3'>Oops, page not found!</h1>
                <p className='text-sm text-gray-500'>The page you are looking for is not available.</p>
                <NavLink to='/' className="btn bg-[#9F62F2] text-white mt-3">Go Back</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;