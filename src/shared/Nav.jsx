import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from '../assets/logo.png';


const Nav = () => {

    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allArt'>All Art & craft</NavLink></li>
    <li><NavLink to='/addCraft'>Add Craft</NavLink></li>
    <li><NavLink to='/myArtCraft'>My Art&Craft</NavLink></li>
   
    </>
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="navbar text-black py-2 lg:px-10 bg-white bg-opacity-60 fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start ">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img className="h-16 w-16" src={logoImage} alt="logo Image" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {/* <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end z-50">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://media.istockphoto.com/id/1211308812/vector/account.jpg?s=1024x1024&w=is&k=20&c=VzSNfBzXzlHYLix-nJp3hiLxUjTayBuLJOKsWHY2yj4="
                    }
                    alt="User"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.displayName || "name not found"}
                  </button>
                </li>
                <li className="text-center items-center">
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-rose-950 rounded hover:bg-white group"
              >
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                  Login
                </span>
              </a>
            </Link>
          )}
        </div> */}
          <div className="navbar-end">
            <a className="btn">Button</a>
            </div>
      </div>
    </div>
  );
};

export default Nav;
