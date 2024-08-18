"use client";

import { IoIosSend } from "react-icons/io";
import Link from "next/link";

import ChatBubble from "@/components/Home/Chat/ChatBubble";

const Chat = () => {
  const messages = [
    {
      id: 1,
      message: "Hey, how are you?",
      sender: "John Doe",
    },
    {
      id: 2,
      message: "Are we still on for tomorrow?",
      sender: "Jane Smith",
    },
    {
      id: 3,
      message: "I sent you the documents.",
      sender: "Bob Johnson",
    },
    {
      id: 4,
      message: "😂😂😂😂😂",
      sender: "John Doe",
    },
  ];

  return (
    <section className="flex flex-col items-start justify-start w-full h-full">
      <div className="fixed border-b w-full p-3 z-10 h-20 bg-base-100">
        <Link href="/profile/1">
          <h1 className="text-2xl font-semibold cursor-pointer">John Doe</h1>
        </Link>
        <p className="text-base text-base-content">Online</p>
      </div>
      <div className="flex-1 flex flex-col w-full p-4 overflow-y-auto my-20">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>
      <div className="fixed bottom-0 right-0 left-0 ml-14 lg:ml-40 border-t p-3 z-10 bg-base-100">
        <div className="flex items-center justify-between h-full w-full gap-2">
          <input
            type="text"
            className="w-full border p-3 rounded-md h-full bg-base-200"
            placeholder="Type a message"
          />
          <button className="bg-base-200 p-2.5 rounded-md h-full w-12 border">
            <IoIosSend className="text-2xl m-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
