import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./Signup.css";
import { useSelector } from "react-redux";

function Signup() {
  const isDarkMode = useSelector((state) => state.toggle.value);

  const [passwordShow, setPasswordShow] = useState(true);
  const [inputType, setInputType] = useState("password");

  function handlePasswordShow() {
    setPasswordShow(!passwordShow);
    setInputType(inputType === "password" ? "text" : "password");
  }

  return (
    <div
      className={`flex justify-center items-center ${
        isDarkMode ? "signup-main-dark" : "signup-main-light"
      }`}
    >
      <div className="signup-child-container flex items-center justify-center gap-7 flex-col w-[350px] max-sm:w-80 h-[530px] rounded-xl">
        <h1 className="text-4xl font-bold mt-2">Chatify</h1>
        <form className="flex items-center flex-col gap-8 w-64 mt-4">
          <div className="login-form-input-div flex items-center rounded-lg">
            <FaUser size={20} className="ml-2 icon-color" />
            <input
              className="login-form-input p-3 w-full font-medium text-lg"
              type="text"
              name=""
              id=""
              placeholder="Name"
              required
            />
          </div>
          <div className="login-form-input-div flex items-center rounded-lg">
            <IoMdMail size={25} className="ml-2 icon-color" />
            <input
              className="login-form-input p-3 w-full font-medium text-lg"
              type="email"
              name=""
              id=""
              placeholder="Email"
              required
            />
          </div>
          <div className="login-form-input-div flex items-center rounded-lg">
            <RiLockPasswordFill size={25} className="ml-2 icon-color" />
            <input
              className="login-form-input p-3 w-full font-medium text-lg"
              type={inputType}
              name=""
              id=""
              placeholder="Password"
              required
            />
            {passwordShow ? (
              <FaEye
                size={25}
                className="mr-2 cursor-pointer icon-color"
                onClick={handlePasswordShow}
              />
            ) : (
              <FaEyeSlash
                size={25}
                className="mr-2 cursor-pointer icon-color"
                onClick={handlePasswordShow}
              />
            )}
          </div>

          <button
            type="submit"
            className="login-form-btn-login w-full p-3 font-semibold rounded-lg"
          >
            Create Account
          </button>
        </form>
        <span className="mt-8">
          Already have Account?{" "}
          <NavLink className="text-indigo-700 underline" to="/login">
            Log In
          </NavLink>
        </span>
      </div>
    </div>
  );
}

export default Signup;
