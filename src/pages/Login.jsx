import React from 'react'
import { Link } from 'react-router';
import { Leaf } from "lucide-react";

const Login = () => {
  return (
    <div>
      <div className='flex justify-center gap-5 min-h-screen items-center bg-green-100'>

       <div className="hidden lg:flex w-1/2  items-center justify-center">
        <div className="max-w-md text-center px-8">
          <Leaf className="w-20 h-20 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-800 mb-3">
            Welcome back to GreenNest
          </h1>
          <p className="text-green-700 font-semibold">
            Grow with nature — nurture your indoor plants and bring life to your home...
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Login your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

          <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link className='text-green-600' to="/auth/register">Register</Link></p>
        </fieldset>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login;