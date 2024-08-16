"use client";

import { IoIosSend } from "react-icons/io";
import Link from "next/link";

import ChatBubble from "./ChatBubble";

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
    <section className="flex flex-col w-full h-full relative">
      <div className="border-b p-3 z-10">
        <Link href="/profile/1">
          <h1 className="text-2xl font-semibold cursor-pointer">John Doe</h1>
        </Link>
        <p className="text-base text-base-content">Online</p>
      </div>
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>
      <div className="absolute flex flex-row gap-2 bottom-0 h-16 bg-base-100 left-0 right-0 p-3 border-t">
        <input
          type="text"
          className="w-full border p-3 rounded-md h-full bg-base-200"
          placeholder="Type a message"
        />
        <button className="bg-base-200 p-2 rounded-md h-full w-12">
          <IoIosSend className="text-2xl m-auto" />
        </button>
      </div>
    </section>
  );
};

export default Chat;
