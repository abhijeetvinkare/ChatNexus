import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  return (
    <div className="login-main flex justify-center items-center">
      <div className="login-child-container login-main flex items-center justify-center gap-8 flex-col w-96 h-5/6">
        <h1 className="text-4xl font-bold">Chatify</h1>
        <form className="flex items-center flex-col gap-7 w-64">
          <div className="login-form-input-div flex items-center">
            <IoMdMail size={25} className="ml-2"/>
          <input className="login-form-input p-3 w-full" type="email" name="" id="" placeholder="Email" required />
          </div>
          <div className="login-form-input-div flex items-center">
          <RiLockPasswordFill size={25} className="ml-2"/>
          <input className="login-form-input p-3 w-full" type="password" name="" id="" placeholder="Password" required /></div>


          <button type="submit" className="login-form-btn-login w-full p-3">Login</button>
        </form>
        <span>-----Or login with-----</span>
          <button className="login-form-btn-loginwithgoogle flex items-center justify-center gap-2 rounded-full p-2 w-32"><FcGoogle size={22}/> Google</button>
          <span>Don't have Account? <NavLink className="text-indigo-700 underline" to="/sign-up">Sign Up</NavLink></span>
      </div>
    </div>
  );
}

export default Login;
