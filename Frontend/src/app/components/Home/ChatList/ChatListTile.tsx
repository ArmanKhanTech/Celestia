"use client";

import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

import Pfp from "@/components/Common/Pfp";

type ChatListTileProps = {
  chat: {
    cid: number;
    pfp_url: string;
    uid: string;
    name: string;
    uname: string;
    recentMessage: string;
    recentMessageTimestamp: string;
  };
};

const ChatListTile = ({ chat }: ChatListTileProps) => {
  const router = useRouter();

  return (
    <div
      key={chat.cid}
      className="flex items-center cursor-pointer w-full py-3 border-b gap-3"
    >
      <Pfp src={chat.pfp_url} props="w-16 h-full rounded-md" />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => {
              console.log(chat.pfp_url);
              router.push(
                `/chat/${chat.cid}?uid=${chat.uid}&uname=${chat.uname}&name=${chat.name}&pfp_url=${chat.pfp_url}`
              );
            }}
            className="font-bold"
          >
            {chat.name}
          </button>
        </div>
        <div className="font-medium">
          {chat.recentMessage
            ? chat.recentMessage.length > 30
              ? chat.recentMessage.slice(0, 30) + "..."
              : chat.recentMessage
            : "Begin a conversation"}
        </div>
        <div className="text-sm text-base-content">
          {chat.recentMessageTimestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatListTile;
