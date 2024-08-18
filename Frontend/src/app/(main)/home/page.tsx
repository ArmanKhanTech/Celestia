"use client";

import { usePathname } from "next/navigation";

import ChatListTile from "@/components/Home/ChatList/ChatListTile";
import ChatListHeader from "@/components/Home/ChatList/ChatListHeader";

type Chat = {
  id: number;
  avatar: string;
  name: string;
  message: string;
};

const ChatList = () => {
  const pathname = usePathname();
  const isChatPage = pathname.includes("/chat/");

  const chats: Chat[] = [
    {
      id: 1,
      name: "John Doe",
      message: "Hey, how are you?",
      avatar: "/images/avatar.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      message: "Are we still on for tomorrow?",
      avatar: "/images/avatar.png",
    },
    {
      id: 3,
      name: "Bob Johnson",
      message: "I sent you the documents.",
      avatar: "/images/avatar.png",
    },
  ];

  return (
    <section className="flex flex-col items-start justify-start w-full h-full p-3 lg:p-6">
      <p className="text-3xl font-semibold text-start">Chats</p>
      <ChatListHeader />
      {chats.map((chat) => (
        <ChatListTile key={chat.id} chat={chat} />
      ))}
    </section>
  );
};

export default ChatList;
