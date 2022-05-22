import React from "react";
import auth from "../../../Firebase/Firebase.config";

const Profile = () => {
  return (
    <div className="grid place-items-center min-h-[80vh] px-5">
      <div className="profile-card w-full md:w-1/3 text-center shadow-lg rounded-lg bg-base-200 p-7">
        <div className="avatar w-40 h-40 rounded-full border-8 text-7xl font-semibold overflow-hidden mt-[-5rem] z-10 grid place-items-center mx-auto bg-base-200">
          {auth?.currentUser?.photoURL ? (
            <img
              src={auth?.currentUser?.photoURL}
              alt={auth?.currentUser?.displayName}
            />
          ) : (
            auth?.currentUser?.displayName.slice(0, 1)
          )}
        </div>
        <div className="info my-2">
          <h3 className="text-lg font-semibold">
            {auth?.currentUser?.displayName}
          </h3>
          <small>{auth?.currentUser?.email}</small>
        </div>
        <hr />
        <div className="another-info flex items-center justify-center  flex-col gap-2 my-3">
          <input
            type="text"
            placeholder="Education"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="LinkedIn Account Link"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Facebook Account Link"
            className="input input-bordered w-full"
          />
          <div className="text-center mt-3">
            <button className="btn btn-primary">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
