import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
           <header>
            <NavBar></NavBar>
           </header>
           <main className='w-11/12 mx-auto py-5'>
             <Outlet></Outlet>
           </main>
        </div>
    );
};

export default AuthLayout;