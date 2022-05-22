import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="login grid place-items-center min-h-[90vh]">
      <div className="login-card flex gap-1 lg:w-1/2 shadow-sm rounded p-10">
        <div className="md:w-2/4 grid place-items-center">
          <img
            src="https://theuniqueacademy.co.in/assets/images/test.png"
            alt="login"
            className="max-w-lg"
          />
        </div>
        <div className="md:w-3/5 backdrop-blur-sm px-5">
          <h2 className="text-3xl font-semibold">Welcome Back!</h2>
          <p className="text-slate-400 uppercase text-sm mb-5">
            Login Into Account.
          </p>
          <form action="/">
            <div className="my-2">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control w-full p-3 border rounded outline-none focus:border-success"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control w-full p-3 border rounded outline-none focus:border-success"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex justify-between items-center my-3">
              <button className="btn btn-primary px-20 rounded-full">
                Login
              </button>
              <Link to="/" className="text-sm">
                Forgot Password?
              </Link>
            </div>
            <div className="social-login-card flex items-center gap-4 my-6">
              <span>Continue With - </span>
              <div className="btn-groups">
                <button className="w-10 h-10 grid place-items-center border rounded">
                  <FcGoogle />
                </button>
              </div>
            </div>
            <p>
              Don't have account?{" "}
              <Link to="/register" className="text-sm text-primary">
                Create
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
