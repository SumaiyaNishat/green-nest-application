import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="plants">Plants</NavLink>
            </li>
            <li>
              <NavLink to="myProfile">MyProfile</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/" className="text-3xl text-green-700 font-semibold">
            GreenNest
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 hidden lg:flex text-xl items-center">
          <li className="hover:text-green-400">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-green-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-green-400">
            <NavLink to="/plants" className={({isActive})=>(isActive ? "text-green-600" : "")}>Plants</NavLink>
          </li>
          <li className="hover:text-green-400">
            <NavLink to="/myProfile" className={({isActive})=>(isActive ? "text-green-600" : "")}  >MyProfile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/auth/login" className="btn bg-green-400 text-white ">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
