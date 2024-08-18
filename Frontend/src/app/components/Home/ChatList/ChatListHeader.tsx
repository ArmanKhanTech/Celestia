"use client";

import { MdGroupAdd } from "react-icons/md";

const ChatListHeader = () => {
  return (
    <div className="flex w-full gap-2 h-10 bg-base-100 my-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full p-3 rounded-md border bg-base-200"
      />
      <button className="bg-base-200 w-14 h-full p-2 rounded-md text-2xl border">
        <MdGroupAdd className="m-auto" />
      </button>
    </div>
  );
};

export default ChatListHeader;
