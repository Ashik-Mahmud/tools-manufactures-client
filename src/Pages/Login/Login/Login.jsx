import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  return (
    <section className="login grid place-items-center min-h-[90vh] mb-10">
      <div className="login-card flex-col md:flex-row flex gap-1 lg:w-1/2 shadow-sm rounded p-4 md:p-10">
        <div className="md:w-2/4 grid place-items-center">
          <img
            src="https://theuniqueacademy.co.in/assets/images/test.png"
            alt="login"
            className="md:max-w-lg"
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
            <div className="flex justify-between items-center my-3 flex-wrap gap-4">
              <button className="btn btn-primary px-20 rounded-full">
                Login
              </button>
              <Link to="/" className="text-sm">
                Forgot Password?
              </Link>
            </div>
            <SocialLogin />
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
