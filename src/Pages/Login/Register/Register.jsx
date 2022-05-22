import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      {" "}
      <section className="login grid place-items-center min-h-[90vh]">
        <div className="sign-up-card flex gap-1 lg:w-1/2 shadow-sm rounded p-10">
          <div className="md:w-2/4 grid place-items-center">
            <img
              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=2000"
              alt="login"
              className="max-w-lg"
            />
          </div>
          <div className="md:w-3/5 backdrop-blur-sm px-5">
            <h2 className="text-3xl font-semibold">Hey You!</h2>
            <p className="text-slate-400 uppercase text-sm mb-5">
              Create Into Account.
            </p>
            <form action="/">
              <div className="my-2">
                <label htmlFor="email" className="">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control w-full p-3 border rounded outline-none focus:border-success bg-transparent"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="my-2">
                <label htmlFor="email" className="">
                  Role
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control w-full p-3 border rounded outline-none focus:border-success bg-base-200 select-none"
                  id="name"
                  value="User"
                  readOnly
                />
              </div>
              <div className="my-2">
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control w-full p-3 border rounded outline-none focus:border-success bg-transparent"
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
                  className="form-control w-full p-3 border rounded outline-none focus:border-success bg-transparent"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex justify-between items-center my-3">
                <button className="btn btn-primary px-20 rounded-full">
                  Create Account
                </button>
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
                Already have an Account?{" "}
                <Link to="/login" className="text-sm text-primary">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
