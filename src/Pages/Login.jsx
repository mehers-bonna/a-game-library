import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5
        
        ">
            <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn  mt-2"><span><FcGoogle /></span> Login With Google</button>
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-2">Login</button>
          <p className='font-semibold text-center'>Don't Have An Account ? <Link to='/auth/register' className='text-red-700'>Register</Link></p>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default Login;