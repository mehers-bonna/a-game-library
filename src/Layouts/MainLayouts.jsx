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