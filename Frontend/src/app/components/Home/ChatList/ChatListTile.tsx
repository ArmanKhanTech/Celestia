"use client";

import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

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
      {chat.pfp_url ? (
        <Image
          src={chat.pfp_url}
          alt={`${chat.name}'s Profile Picture`}
          width={64}
          height={64}
          className="rounded-md w-14 h-12 object-cover"
        />
      ) : (
        <div className="w-14 h-12 rounded-md bg-base-300 flex items-center justify-center">
          <FaUser className="w-6 h-6" />
        </div>
      )}
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => {
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
