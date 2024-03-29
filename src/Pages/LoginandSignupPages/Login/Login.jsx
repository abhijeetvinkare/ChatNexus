import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";

function Login() {
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
        isDarkMode ? "login-main-dark" : "login-main-light"
      }`}
    >
      <div
        className={`flex items-center justify-center gap-7 flex-col w-[350px] max-sm:w-80 h-[530px] rounded-xl ${
          isDarkMode ? "login-child-container-dark" : "login-child-container"
        }`}
      >
        <h1 className="text-4xl font-bold mt-2">Chatify</h1>
        <form className="flex items-center flex-col gap-8 w-64 mt-4">
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
            <RiLockPasswordFill size={27} className="ml-2 icon-color" />
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
            Login
          </button>
        </form>
        <span>-----Or login with-----</span>
        <button className="login-form-btn-loginwithgoogle flex items-center justify-center gap-2 rounded-full p-2 w-32 font-medium">
          <FcGoogle size={22} /> Google
        </button>
        <span>
          Don't have Account?{" "}
          <NavLink className="text-indigo-700 underline" to="/sign-up">
            Sign Up
          </NavLink>
        </span>
      </div>
    </div>
  );
}

export default Login;
