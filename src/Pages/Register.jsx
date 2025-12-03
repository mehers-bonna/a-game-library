import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const {createUser, setUser, updateUser} = use(AuthContext);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target)
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError('Password must have at least 1 uppercase, 1 lowercase, and 6 characters long.');
      return; 
    }

    // console.log({name, photo, email, password})
    createUser(email, password)
    .then(result => {
      const user = result.user;
      // console.log(user)
      updateUser({displayName: name, photoURL: photo})
      .then(() => {
        setUser({...user, displayName: name, photoURL: photo});
        toast.success("Registration successful. 🎉");
        navigate('/')
      })
      .catch((error) => {
       console.log(error)
       setUser(user)
       toast.warn("Profile updated partially. Please check again.");
      });
      
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
      toast.error(`Registration failed: ${errorMessage}`);
    })
  }
    return (
        <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5
                
                ">
                    <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
              <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                    {/* name */}
                  <label className="label">Name</label>
                  <input 
                  name='name' 
                  type="text" 
                  className="input" 
                  placeholder="Name"
                  required />
                    {/* photo URL */}
                  <label className="label">Photo URL</label>
                  <input 
                  name='photo' 
                  type="text" 
                  className="input" 
                  placeholder="Photo URL" 
                  required/>
                    {/* email */}
                  <label className="label">Email</label>
                  <input 
                  name='email' 
                  type="email" 
                  className="input" 
                  placeholder="Email" 
                  required/>
                  {/* password */}
                  <label className="label">Password</label>
                  <input 
                  name='password' 
                  type="password" 
                  className="input" 
                  placeholder="Password" 
                  required/>


                   {error && <p className='text-red-700 text-xs'>{error}</p> }

                  <button className="btn  mt-2"><span><FcGoogle /></span> Login With Google</button>
                  <button type='submit' className="btn bg-purple-600 text-white mt-2">Register</button>
                  <p className='font-semibold text-center'>Already Have An Account ? <Link to='/auth/login' className='text-red-700'>Login</Link></p>
                </fieldset>
              </form>
            </div>
                </div>
    );
};

export default Register;