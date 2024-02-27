import React from "react";
import "./LeftChatList.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

function LeftChatList() {
  return (
    <div className="flex gap-7 flex-col mt-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Chatify</h1>
        </div>
        <div>
          <BsThreeDotsVertical size={25} className="cursor-pointer" />
        </div>
      </div>
      <div className="mr-2">
        <div className="flex items-center rounded-lg leftchat-search-input-div">
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full py-2 pl-3 leftchat-search-input-div text-lg rounded-lg"
          />
          <IoSearchOutline size={25} className="mr-2"/>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
}

export default LeftChatList;
