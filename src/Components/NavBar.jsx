import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.jpg';
import { AuthContext } from '../Provider/AuthProvider';
import userProfile from '../assets/userprofile.jpg';
import { toast } from 'react-toastify';

const NavBar = () => {
  const {user, logOut} = use(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    console.log("user trying to log out")
    logOut()
   .then(() => {
  toast.success("You logged out successfully.");
  navigate("/");
}).catch((error) => {
  toast.error(error.message)
});
  }


   const handleProfileClick = () => {
    navigate('/myProfile');
  };



    return (
        <div>
          <div className="navbar bg-base-100 shadow-sm">
  <div className="w-11/12 mx-auto flex justify-between items-center">
    <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content ">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/browseGames'>BrowseGames</NavLink></li>
        <li><NavLink to='/developers'>Developers</NavLink></li>
      </ul>
    </div>
    <img className='h-[30px] w-[30px] rounded-full' src={logo} alt="" />
    <Link to='/' className="text-[#632EE3] text-xl font-bold ml-2">GameHub</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-3 text-md ">
      <li><NavLink className="hover:underline hover:text-[#632EE3]" to='/'>Home</NavLink></li>
      <li><NavLink className="hover:underline hover:text-[#632EE3]" to='/browseGames'>BrowseGames</NavLink></li>
      <li><NavLink className="hover:underline hover:text-[#632EE3]" to='/developers'>Developers</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    {user ? <button onClick={handleLogOut} className="btn bg-[#9F62F2] text-white">Log Out</button> : <Link to='/auth/login'
    className="btn bg-[#9F62F2] text-white"> Login</Link>}

    {
      user ? <Link to='/auth/myProfile'><img onClick={handleProfileClick} className='w-10 h-10 rounded-full' src={`${user ? user.photoURL : userProfile}`} alt="" /></Link> : <Link to='/auth/register'
    className="btn bg-[#9F62F2] text-white"> Register</Link>
    }
    
    
  </div>
  </div>
      </div>
      <div>{user && user.email}</div>
        </div>
    );
};

export default NavBar;