import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation } from 'react-router';

const ForgetPassword = () => {

    const location = useLocation();
  const emailFromLogin = location.state?.email || '';
  const [email, setEmail] = useState(emailFromLogin);
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Password reset email sent! Redirecting to Gmail...');
        // Redirect to Gmail after 2 seconds
        setTimeout(() => {
          window.location.href = 'https://mail.google.com/';
        }, 2000);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };
    return (
        <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Reset Password</h2>
        <form onSubmit={handleReset} className="card-body">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-2">
            Reset Password
          </button>
          {message && <p className='text-green-700 text-xs mt-2'>{message}</p>}
        </form>
      </div>
    </div>
    );
};

export default ForgetPassword;