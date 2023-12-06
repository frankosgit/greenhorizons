import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 font-mono">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left pl-24">
        <h1 className="text-5xl font-bold">Welcome back!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
            <h1 className="text-4xl mt-4 mb-6">Log in here</h1>
          <div className="form-control">
            <label htmlFor="username" className="label">
              <span className="label-text">Username</span>
            </label>
            <input value="" type="username" placeholder="username" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input value="" type="password" placeholder="password" className="input input-bordered" required />
            <label htmlFor="forgotpassword" className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <Link href= "/register"><div className="form-control mt-6">
            <button className="btn btn-primary">Sign up</button>
          </div></Link>
        </form>
      </div>
    </div>
  </div>

  )
}

export default Login