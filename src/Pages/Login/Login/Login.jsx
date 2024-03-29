import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.config";
import useFirebase from "../../../Hooks/useFirebase";
import useTitle from "../../../Hooks/useTitle";
import useToken from "../../../Hooks/useToken";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  useTitle("Login");
  /*  if user is loggedIn */
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { user } = useFirebase();
  /* call useToken */
  const [token] = useToken(user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, token]);

  /* Handle Login User */
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res) {
          toast.success(`Sign In successfully done.`);
        }
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  /* Handle Reset Password  */
  const handleResetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`We sent you email with password reset link.`);
        event.target.reset();
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

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
          <form action="/" onSubmit={handleLogin}>
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
              <label
                type="button"
                htmlFor="my-modal-4"
                className="text-sm modal-button btn-link cursor-pointer text-slate-700"
                onClick={() => {}}
              >
                Forgot password?
              </label>
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
      <form onSubmit={handleResetPassword} action="" className="my-2">
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-4"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Reset Your Password</h3>
            <p>Here you can reset your password via email</p>
            <div className="my-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full my-3"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="text-right">
              <button className="btn">Reset Password</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
