import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  /*  Menus */
  const NavbarMenus = (
    <>
      <li>
        <NavLink className="uppercase" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="uppercase" to="/blogs">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink className="uppercase" to="/portfolios">
          My Portfolios
        </NavLink>
      </li>

      <li>
        <NavLink className="uppercase" to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        <Link className="uppercase bg-base-200" to="/dashboard">
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <header className="py-2 shadow-sm">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavbarMenus}
            </ul>
          </div>
          <a
            className="btn btn-ghost normal-case text-xl flex gap-2 items-center"
            href="/"
          >
            <BsTools /> <span className="hidden md:block">Tools House</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-3">{NavbarMenus}</ul>
        </div>
        <div className="navbar-end gap-3">
          <NavLink
            to="/login"
            className="btn flex gap-2 items-center btn-primary"
          >
            <BiLogInCircle /> Login
          </NavLink>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?hash=33791"
                    alt="avatar"
                  />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between" href="/">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="/">Dashboard</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
