import React from "react";
import "./Chatwindow.css"
import LeftChatList from "./LeftChatList/LeftChatList";
import RightMainChat from "./RightMainChat/RightMainChat";

function Chatwindow() {
  return (
    <div className="flex h-screen">
      <div className="chat-window-left-container w-80 p-5">
        <LeftChatList />
      </div>
      <div className="chat-window-right-container flex-grow">
        <RightMainChat />
      </div>
    </div>
  );
}

export default Chatwindow;
