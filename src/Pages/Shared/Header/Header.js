import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../../../logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, providerSignOut } = useContext(AuthContext);
  /* Handle Sign Out */
  const handleSignOut = () => {
    providerSignOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="py-3 ">
      <div className="navbar container mx-auto bg-base-100 rounded-xl px-5">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60"
            >
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {user?.uid ? (
                <li>
                  <Link onClick={handleSignOut}>Log Out</Link>
                </li>
              ) : (
                <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              </>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case text-2xl flex flex-rows items-center font-bold "
          >
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="EduVibe Logo" />
            Edu<span className="text-red-500 px-1 ">Vibe</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {user?.uid ? (
            <Link
              onClick={handleSignOut}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-red-500 text-white"
            >
              Log Out
            </Link>
          ) : (
            <Link
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-red-500 border-none text-white"
              to="/login"
            >
              Log In
            </Link>
          )}

          <>
            {user?.uid ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="rounded-full">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <FaUser className=" rounded-full flex items-center" />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      User Name: {user?.displayName}
                    </a>
                  </li>
                  <li>
                    <a onClick={handleSignOut}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <FaUser></FaUser>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
