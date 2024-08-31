/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import { FaUser, FaArrowLeft } from "react-icons/fa";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import ChatBubble from "@/components/Home/Chat/ChatBubble";
import Pfp from "@/components/Common/Pfp";

const ChatPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [messages, setMessages] = useState([]);
  const [interlocutor, setInterlocutor] = useState({
    uid: searchParams.get("uid"),
    uname: searchParams.get("uname"),
    name: searchParams.get("name"),
    pfp_url: searchParams.get("pfp_url"),
  });

  console.log(interlocutor.pfp_url);

  useEffect(() => {}, []);

  return (
    <section className="flex flex-col items-start justify-start gap-2 w-full h-full">
      <div className="sticky top-24 w-full h-16 border-b pb-6 px-2 lg:px-4 pt-2 z-10 bg-base-100">
        <div className="flex items-center justify-between h-full w-full gap-2">
          <div className="flex items-center gap-4 w-full">
            <FaArrowLeft
              onClick={() => router.back()}
              className="h-6 w-6 cursor-pointer"
            />
            <Pfp src={interlocutor.pfp_url} props="w-16 h-full rounded-md" />
            <Link href={`/profile/${interlocutor.uid}`}>
              <h1 className="text-2xl font-semibold cursor-pointer">
                {interlocutor.name}
              </h1>
            </Link>
          </div>
          <p className="text-base text-base-content">Online</p>
        </div>
      </div>
      <div className="flex flex-col w-full h-full p-3 overflow-y-auto">
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
