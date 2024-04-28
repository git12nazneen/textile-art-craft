import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import swal from "sweetalert";
import { Tooltip } from 'react-tooltip'
const Nav = () => {
  const [theme, setTheme] = useState('light')
  const {user, logOut} = useContext(AuthContext);
  
  // logout implement

  const handleSignOut = () =>{
    logOut().then().catch();
    swal({
      text:'logout success',
      icon:'success'
    })
  }


  // theme implement
  useEffect( ()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  }, [theme])

  const handleToggle = (e) =>{
    if(e.target.checked){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }
  console.log(theme)
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArt">All Art & craft</NavLink>
      </li>
      <li>
        <NavLink to="/addCraft">Add Craft</NavLink>
      </li>
      <li>
        <NavLink to="/myArtCraft">My Art&Craft</NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="navbar text-black py-2 lg:px-10 bg-purple-400 bg-opacity-60 fixed top-0 left-0 right-0 z-50 shadow-lg">
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
          <img className="h-20 w-20" src={logoImage} alt="logo Image" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        
        <div className="navbar-end">
          <div className="mr-3">
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          </div>
          <div>
            {
              user?.email ? (
                <div className="dropdown dropdown-end z-50">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                 <button data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                 <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://media.istockphoto.com/id/1211308812/vector/account.jpg?s=1024x1024&w=is&k=20&c=VzSNfBzXzlHYLix-nJp3hiLxUjTayBuLJOKsWHY2yj4="
                    }
                    alt="User"
                  />
                 </button>
                 <Tooltip id="my-tooltip"></Tooltip>
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
                {/* <li className="text-center items-center">
                  <NavLink to="/profile">Profile</NavLink>
                </li> */}
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
                <a className="btn btn-outline">Login</a>
              </Link>
              )
            }
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Nav;
