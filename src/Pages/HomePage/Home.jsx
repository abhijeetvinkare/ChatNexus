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
      <div className="flex">
          <div className="w-1/2">
            <div className="px-16 mt-14 flex flex-col gap-y-6 ml-10">
              <h1 className="left-heading text-6xl font-extrabold">Chat Away, Any Day<span className="left-heading-span mx-2">messages that matter</span></h1>
              <p className="text-justify font-semibold text-base home-left-div-para leading-relaxed">Chatify Your go-to messaging web app for effortless communication. Intuitive interface, vibrant chat environment. Share moments, express with emojis, join a joyful community now.</p>
              <NavLink to="/login">
              <button className="btn-start-msg self-start p-4 w-56 font-bold text-lg flex justify-center items-center gap-x-3"><BsSend size={25}/> Start Messaging </button>
              </NavLink>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center mr-10">
            <img src={right_vector_img} alt="" className="home-right-div-img" />
          </div>
      </div>
    </div>
  );
}

export default Home;
