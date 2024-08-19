"use client";

import { IoIosSend } from "react-icons/io";
import Link from "next/link";

import ChatBubble from "@/components/Home/Chat/ChatBubble";

const ChatPage = () => {
  const messages = [
    { id: 1, message: "Hey, how are you?", sender: "John Doe" },
    { id: 2, message: "Are we still on for tomorrow?", sender: "Jane Smith" },
    { id: 3, message: "I sent you the documents.", sender: "Bob Johnson" },
    { id: 4, message: "😂😂😂😂😂", sender: "John Doe" },
    { id: 5, message: "😂😂😂😂😂", sender: "John Doe" },
    { id: 6, message: "😂😂😂😂😂", sender: "John Doe" },
  ];

  return (
    <section className="flex flex-col items-start justify-start gap-2 w-full h-full">
      <div className="sticky top-20 w-full h-16 border-b p-3 pt-2 z-10 bg-base-100">
        <div className="flex items-center justify-between h-full w-full gap-2">
          <Link href="/profile/1">
            <h1 className="text-2xl font-semibold cursor-pointer">John Doe</h1>
          </Link>
          <p className="text-base text-base-content">Online</p>
        </div>
      </div>
      <div className="flex flex-col w-full p-3 overflow-y-auto">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>
      <div className="sticky bottom-0 w-full border-t p-3 z-10 bg-base-100">
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

export default ChatPage;
