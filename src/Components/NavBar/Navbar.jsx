import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="flex justify-between items-center max-sm:px-5 max-md:px-10 px-20 py-6">
      <div>
        <h1 className="text-3xl font-bold brand-name-heading">ChatNexus</h1>
      </div>
      <div className="flex justify-around items-center">
        <div className="nav-hamburger-btn-div">
          <button className="nav-hamburger-btn p-2 rounded-md">
            <GiHamburgerMenu size={25} />
          </button>
        </div>
        <div className="navbar-btn-div flex justify-around w-80 items-center">
          <button className="btn-login-navbar py-2 px-3 w-24 font-bold rounded-md text-lg">
            Login
          </button>
          <button className="btn-create-navbar py-3 px-5 rounded-lg font-medium hover:font-bold">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
