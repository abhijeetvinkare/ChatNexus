import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import "./Home.css"
import { BsSend } from "react-icons/bs";
import right_vector_img from "../../assets/images/1707587833002_1.png"
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="flex max-xl:mt-0 max-xl:pb-8 max-lg:pb-14 max-sm:pb-8">
          <div className="w-1/2 max-lg:w-full max-lg:justify-center max-lg:flex max-lg:item-center">
            <div className="px-16 xl:mt-4 xl:px-10 max-xl:px-2 max-lg:w-4/5 max-sm:px-0 mt-14 flex flex-col gap-y-6 max-lg:gap-y-8 ml-10 max-sm:ml-0">
              <h1 className="left-heading text-6xl max-sm:text-5xl font-extrabold">Chat Away,<br/> Any Day<span className="left-heading-span mx-2 flex">messages that matter</span></h1>
              <p className="text-justify font-semibold text-base home-left-div-para leading-relaxed max-lg:w-96 max-sm:w-11/12">Chatify Your go-to messaging web app for effortless communication. Intuitive interface, vibrant chat environment. Share moments, express with emojis, join a joyful community now.</p>
              <NavLink to="/login">
              <button className="btn-start-msg self-start p-4 w-56 font-bold text-lg flex justify-center items-center gap-x-3"><BsSend size={25}/> Start Messaging </button>
              </NavLink>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center mr-10 max-xl:mr-0 max-lg:hidden max-lg:w-0">
            <img src={right_vector_img} alt="" className="home-right-div-img" />
          </div>
      </div>
    </div>
  );
}

export default Home;
