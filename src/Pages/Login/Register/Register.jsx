import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.config";
import useFirebase from "../../../Hooks/useFirebase";
import useToken from "../../../Hooks/useToken";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  /*  if user is loggedIn */
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { user } = useFirebase();
  const [token] = useToken(user);
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  /* Handle Create User Registration  */
  const handleCreateUser = async (event) => {
    event.preventDefault();
    const displayName = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth?.currentUser, { displayName: displayName }).then(
          () => {
            toast.success(`Creating & SignIn successfully done.`);
          }
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message?.split(":")[1]);
      });
  };

  return (
    <div>
      {" "}
      <section className="login grid place-items-center min-h-[90vh]">
        <div className="sign-up-card flex flex-col md:flex-row my-6 gap-1 lg:w-1/2 shadow-sm rounded p-4 md:p-10">
          <div className="md:w-2/4 grid place-items-center">
            <img
              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=2000"
              alt="login"
              className="md:max-w-lg"
            />
          </div>
          <div className="md:w-3/5 backdrop-blur-sm px-5">
            <h2 className="text-3xl font-semibold">Hey You!</h2>
            <p className="text-slate-400 uppercase text-sm mb-5">
              Create Into Account.
            </p>
            <form action="/" onSubmit={handleCreateUser}>
              <div className="my-2">
                <label htmlFor="email" className="">
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control w-full p-3 border rounded outline-none focus:border-success bg-transparent"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="my-2">
                <label htmlFor="role" className="">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
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
              <SocialLogin />
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
