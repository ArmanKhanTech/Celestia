import Link from "next/link";
import { useState } from "react";
import { MdGroupOff } from "react-icons/md";

import NewGroupDialog from "@/components/Dialogs/NewGroupDialog";

const ChatListPlaceholder = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="flex flex-col p-4 items-start justify-center text-start gap-2 w-full h-full lg:max-w-1/2">
      <MdGroupOff className="text-6xl text-start" />
      <div className="text-3xl ml-[2px]">
        <h2>No were groups found.</h2>
        <p>
          <button className="text-blue-500" onClick={() => setIsOpened(true)}>
            Create a group
          </button>{" "}
        </p>
      </div>
      <NewGroupDialog isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </div>
  );
};

export default ChatListPlaceholder;
