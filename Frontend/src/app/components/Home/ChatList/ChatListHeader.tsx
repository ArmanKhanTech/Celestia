"use client";

import { useState } from "react";
import { MdGroupAdd } from "react-icons/md";

import NewGroupDialog from "@/components/Dialogs/NewGroupDialog";

const ChatListHeader = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="flex w-full gap-2 h-10 bg-base-100 my-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full p-3 rounded-md border bg-base-200"
      />
      <button
        className="bg-base-200 w-14 h-full p-2 rounded-md text-2xl border"
        onClick={() => setIsOpened(true)}
      >
        <MdGroupAdd className="m-auto" />
      </button>
      <NewGroupDialog isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </div>
  );
};

export default ChatListHeader;
