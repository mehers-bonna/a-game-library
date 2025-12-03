import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.jpg';
import { AuthContext } from '../Provider/AuthProvider';
import userProfile from '../assets/userprofile.jpg';
import { toast } from 'react-toastify';

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You logged out successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleProfileClick = () => {
    navigate('/myProfile');
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? "relative text-[#632EE3] font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#632EE3] after:rounded-full after:transition-all after:duration-300"
      : "relative hover:text-[#632EE3] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#632EE3] after:rounded-full after:transition-all after:duration-300";

  return (
    <div className="py-2 sticky top-0 z-50 bg-transparent">
      {/* Only navbar area has background */}
      <div className="navbar w-9/12 mx-auto shadow-sm rounded-xl px-4 bg-purple-100">

        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-purple-50 p-2 rounded-md shadow">
              <li><NavLink className={linkStyle} to='/'>Home</NavLink></li>
              <li><NavLink className={linkStyle} to='/browseGames'>Browse Games</NavLink></li>
              <li><NavLink className={linkStyle} to='/developers'>Developers</NavLink></li>
              <li><NavLink className={linkStyle} to='/about'>About</NavLink></li>
              <li><NavLink className={linkStyle} to='/contact'>Contact</NavLink></li>
            </ul>
          </div>

          <img className='h-[30px] w-[30px] rounded-full' src={logo} alt="" />
          <Link to='/' className="text-[#632EE3] text-xl font-bold ml-2">GameHub</Link>
        </div>

        {/* CENTER MENU (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 text-md">
            <li><NavLink to='/' className={linkStyle}>Home</NavLink></li>
            <li><NavLink to='/browseGames' className={linkStyle}>Browse Games</NavLink></li>
            <li><NavLink to='/developers' className={linkStyle}>Developers</NavLink></li>
            <li><NavLink to='/about' className={linkStyle}>About</NavLink></li>
            <li><NavLink to='/contact' className={linkStyle}>Contact</NavLink></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end space-x-3">
          {user ? (
            <button onClick={handleLogOut} className="btn bg-purple-600 text-white">
              Log Out
            </button>
          ) : (
            <Link to='/auth/login' className="btn bg-purple-600 text-white">
              Login
            </Link>
          )}

          {user ? (
            <Link to='/auth/myProfile'>
              <img
                onClick={handleProfileClick}
                className='w-10 h-10 rounded-full cursor-pointer'
                src={user.photoURL || userProfile}
                alt="profile"
              />
            </Link>
          ) : (
            <Link to='/auth/register' className="btn bg-purple-600 text-white">
              Register
            </Link>
          )}
        </div>
      </div>

      {/* Optional Email */}
      <div className="text-center mt-1">{user && user.email}</div>
    </div>
  );
};

export default NavBar;
