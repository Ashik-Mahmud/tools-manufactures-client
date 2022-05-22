import { signOut } from "firebase/auth";
import React from "react";
import { toast } from "react-hot-toast";
import { BsGrid } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../../Firebase/Firebase.config";
const Dashboard = () => {
  /* handle log out */
  const handleLogOut = async () => {
    await signOut(auth).then(() => {
      toast.success(`Sign out successfully done.`);
    });
  };

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-3 md:p-6">
        <div className="header sticky top-0 flex justify-between items-center bg-base-200 p-4 rounded">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-base-200 text-black drawer-button lg:hidden "
          >
            <BsGrid className="text-2xl" />
          </label>
          <h3 className="badge badge-primary badge-md">Admin</h3>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div
                style={{ display: "grid" }}
                className="w-10 h-10  place-items-center rounded-full border "
              >
                {auth?.currentUser?.photoURL ? (
                  <img
                    src={auth?.currentUser?.photoURL}
                    alt={auth?.currentUser?.displayName}
                  />
                ) : (
                  <span className="t">
                    {auth?.currentUser?.displayName.slice(0, 1)}
                  </span>
                )}
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        </div>

        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          <div className="flex flex-col items-center gap-3 text-2xl p-2 border-b pb-5">
            <Link
              to="/"
              className="logo font-semibold text-center flex items-center flex-col gap-2"
            >
              <FaTools className="text-black" />
              Tools House
            </Link>
            <button onClick={handleLogOut} className="btn btn-xs btn-outline">
              LogOut
            </button>
          </div>
          <li className="mt-4">
            <NavLink to="/dashboard/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-orders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-review">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </li>
          <li className="mt-4">
            <NavLink to="/dashboard/add-product">Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-product">Product Management</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-order">Order Management</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/make-admin">Make Admin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
