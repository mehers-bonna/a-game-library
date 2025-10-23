import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

     if (!user) {
      alert('User not found! Please log in again.');
      return;
    }
    updateProfile(user, {
      displayName: name,
      photoURL: photo
    })
      .then(() => {
        alert('Profile updated successfully!');
        console.log('Updated Info:', { name, photo });

        navigate('/auth/myProfile');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        alert('Something went wrong! Check console for details.');
      });
  };
    return (
         <div className="w-6/12 h-[400px] mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#632EE3]">Update Your Information</h2>

      <form onSubmit={handleUpdate} className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter photo URL"
          />
        </div>

        <button
          type="submit"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-full"
        >
          Update Information
        </button>
      </form>
    </div>
    );
};

export default UpdateProfile;