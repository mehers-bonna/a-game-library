import React from 'react';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import NewsLetter from './../Components/NewsLetter';


const MainLayouts = () => {
    const location = useLocation()
    return (
        <div className='flex flex-col '>
            <NavBar></NavBar>
            {/* {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <h1 className="text-2xl font-bold tracking-widest text-gray-800 flex items-center gap-2">
                        L <span className="animate-pulse"><img src={logo} alt="" className="w-24 animate-spin" /></span> ADING
                    </h1>
                </div>
            )} */}
            <div className='flex-1 w-11/12 mx-auto '>
                {location.pathname === "/" && <Banner />}
                <Outlet></Outlet>
            </div>
            {location.pathname === "/" && <NewsLetter/>}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;