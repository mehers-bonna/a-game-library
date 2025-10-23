import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import userprofile from '../assets/userprofile.jpg';

const MyProfile = () => {

    const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate('/updateProfile');
  };
    return (
        <div className="w-6/12 h-[400px] mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="flex justify-center w-full md:w-1/3">
        <img
          src={user?.photoURL || userprofile}
          alt="User"
          className="w-48 h-48 rounded-full border-4 border-[#632EE3] object-cover"
        />
      </div>

      <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-bold text-[#632EE3]">My Profile</h2>
        <p><span className="font-semibold">Name:</span> {user?.displayName || "No name added"}</p>
        <p><span className="font-semibold">Email:</span> {user?.email}</p>

        <Link to='/auth/updateProfile'
        type='submit'
          onClick={handleUpdateClick}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4"
        >
          Update Profile
        </Link>
      </div>
    </div>
    );
};

export default MyProfile;