"use client";

import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

import Pfp from "@/components/Common/Pfp";
import { RecentChat } from "@/src/app/lib/types";

const ChatListTile = ({ chat }: RecentChat) => {
  const router = useRouter();

  return (
    <div
      key={chat.cid}
      className="flex items-center cursor-pointer w-full py-3 border-b gap-3"
    >
      <Pfp src={chat.interlocutor.pfp_url} style="w-16 h-full rounded-md" />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => {
              router.push(
                `/chat/${chat.cid}?uid=${chat.interlocutor.uid}&uname=${chat.interlocutor.uname}&name=${chat.interlocutor.name}&pfp_url=${chat.interlocutor.pfp_url}&is_active=${chat.interlocutor.is_active}&last_seen=${chat.interlocutor.last_seen}`
              );
            }}
            className="font-bold"
          >
            {chat.interlocutor.name}
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
