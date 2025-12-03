import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const {logIn} = useContext(AuthContext);
  const [error, setError] = useState();
  const [email, setEmail] = useState('');
  const location = useLocation();
  const navigate = useNavigate();


   const handleForgotPassword = () => {
    navigate('/auth/forgetPassword', { state: { email } });
  };

  // console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError('Password must have at least 1 uppercase, 1 lowercase, and 6 characters long.');
      return; 
    }
    // console.log({email, password});
    logIn(email, password)
    .then((result) => {
     const user = result.user;
    //  console.log(user)
     toast.success("Login successful.");
     navigate(location.state?.from || "/");
    })
    .catch((err) => {
        setError(err.message);
        toast.error("Login failed! Please check your credentials.");
      });

  }
    return (
        <div className='flex justify-center min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5
        
        ">
            <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input 
          name='email' 
          type="email" 
          className="input" 
          placeholder="Email" 
          required
           value={email}
              onChange={e => setEmail(e.target.value)}/>
          {/* password */}
          <label className="label">Password</label>
          <input 
          name='password' 
          type="password" 
          className="input" 
          placeholder="Password" 
          required/>
          <div><Link to='/auth/forgetPassword' onClick={handleForgotPassword} className="link link-hover">Forgot password?</Link></div>



           {error && <p className='text-red-700 text-xs'>{error}</p> }

          <button type='button' className="btn  mt-2"><span><FcGoogle /></span> Login With Google</button>
          <button type='submit' className="btn bg-purple-600 text-white mt-2">Login</button>
          <p className='font-semibold text-center'>Don't Have An Account ? <Link to='/auth/register' className='text-red-700'>Register</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;