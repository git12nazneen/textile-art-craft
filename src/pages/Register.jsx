import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";



const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext)
    const [showPassword, setShowpassword] = useState(false);
    const [ success , setSuccess ] = useState('')
    const [loading, setLoading] = useState(true)
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in login', location)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
   
        const {email, password ,image, name} = data;
        setLoading(true);
        if(password.length < 6){
            swal({
                text: "Length must be at least 6 character",
                icon: "error"
              });
            return;
        }
        if(!/[A-Z]/.test(password)){
          
            swal({
                text: "Your password should have one uppercase character",
                icon: "error"
              });
            return;
        }
        if(!/[a-z]/.test(password)){
            

            swal({
                text: "Your password should have one lowercase character",
                icon: "error"
              });
            return;
        }
        // create user and update profile
        createUser(email, password, image, name)
        .then(result =>{
            updateUserProfile(name, image)
            .then( ()=>{
                if(result.user){
                    swal({
                        text: "Success fully login",
                        icon: "success"
                      });
                    navigate(location?.state ? location.state : '/');
                }
            })
			
		})
        .catch(error => {
            swal({
                text: "Sign in failed!",
                icon: "error"
              });
            console.error('Sign in error:', error);
          })
          
            // reset error and success
            setSuccess('');
            setError('');
    }
    
  return (
    <div>
      <div
        className="hero h-full bg-gray-200 "
        // style={{ backgroundImage: `url(${registerImg})` }}
      >
       <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900 mx-auto shadow-md shadow-gray-400 my-10" >
                <div className="mb-8 text-center">
                     <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-gray-800">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered bg-purple-200"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-gray-800">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered bg-purple-200"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-gray-800">Image url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  name="image"
                  className=" input input-bordered bg-purple-200"
                  {...register("image")}
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-gray-800">Password</span>
                </label>
                <div className="relative mb-3 ">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="w-full py-3 px-4 input input-bordered bg-purple-200"
                    {...register("password", { required: true })}
                  />
                  <span
                    className="absolute top-3 right-2"
                    onClick={() => setShowpassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                  </span>
                </div>
                <label className="label ">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-gray-800"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-600 text-white">Register</button>
              </div>
            </form>

            {/* {error && <p className="text-red-700">{error}</p>} */}
            {/* {success && <p className="text-green-600">{success}</p>} */}
            <p className="text-center my-4 text-gray-800">
              Already have an account{" "}
              <Link className="text-purple-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
          <div className="text-center lg:text-left w-3/6"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
