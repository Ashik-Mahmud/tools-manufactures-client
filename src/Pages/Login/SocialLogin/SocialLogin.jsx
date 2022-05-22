import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import useFirebase from "../../../Hooks/useFirebase";

const SocialLogin = () => {
  const { loginWithSocial } = useFirebase();
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    loginWithSocial(provider);
  };
  return (
    <div className="social-login-card flex items-center gap-4 my-6">
      <span>Continue With - </span>
      <div className="btn-groups">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-10 h-10 grid place-items-center border rounded"
        >
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
