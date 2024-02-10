import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import "./Home.css"
import { BsSend } from "react-icons/bs";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="flex">
          <div className="w-1/2">
            <div className="px-20 py-16 mt-10 flex flex-col gap-y-8">
              <h1 className="left-heading text-6xl font-extrabold">Order Your Best <span className="left-heading-span mx-2">food anytime</span></h1>
              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti eligendi ipsa, deserunt laborum, dolorum voluptatibus vero sint veniam sequi autem, eveniet eaque provident?</p>
              <button className="btn-start-msg self-start p-4 w-56 font-bold text-lg flex justify-center items-center gap-x-3"><BsSend size={25}/> Start Messaging </button>
            </div>
          </div>
          <div className="w-1/2">
            <h1>right div</h1>
          </div>
      </div>
    </div>
  );
}

export default Home;
