"use client";

import { useState } from "react";
import { RiChatNewLine } from "react-icons/ri";
import Link from "next/link";

const ChatListHeader = () => {
  return (
    <div className="flex w-full gap-2 h-10 bg-base-100 my-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full p-3 rounded-md border bg-base-200"
      />
      <Link
        href="/search"
        className="bg-base-200 w-14 h-full p-2 rounded-md text-2xl border"
      >
        <RiChatNewLine className="m-auto" />
      </Link>
    </div>
  );
};

export default ChatListHeader;
