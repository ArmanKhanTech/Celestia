"use client";

import { usePathname } from "next/navigation";
import ChatListTile from "./ChatListTile";
import ChatListHeader from "./ChatListHeader";

type Chat = {
  id: number;
  avatar: string;
  name: string;
  message: string;
};

const ChatList = () => {
  const pathname = usePathname();
  const isChatPage = pathname.includes("/chat/");

  const chats: Chat = [
    {
      id: 1,
      name: "John Doe",
      message: "Hey, how are you?",
    },
    {
      id: 2,
      name: "Jane Smith",
      message: "Are we still on for tomorrow?",
    },
    {
      id: 3,
      name: "Bob Johnson",
      message: "I sent you the documents.",
    },
  ];

  return (
    <section
      className={`${isChatPage ? "hidden lg:block" : ""} w-full h-full lg:max-w-96 lg:border-r overflow-y-auto`}
    >
      <ChatListHeader />
      {chats.map((chat) => (
        <ChatListTile key={chat.id} chat={chat} />
      ))}
    </section>
  );
};

export default ChatList;
