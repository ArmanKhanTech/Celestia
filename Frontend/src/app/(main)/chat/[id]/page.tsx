/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import { FaUser, FaArrowLeft } from "react-icons/fa";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PiChatCenteredSlashLight } from "react-icons/pi";

import ChatBubble from "@/components/Home/Chat/ChatBubble";
import Pfp from "@/components/Common/Pfp";
import useChats from "@/hooks/useChats";
import { getDecodedPfpUrl } from "@/src/app/lib/utils";
import { Message } from "@/src/app/lib/types";

const ChatPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { fetchMessages, sendMessage, receiveMessage, getOnlineStatus } =
    useChats();

  const cid = pathname.split("/")[2];

  const [interlocutor, setInterlocutor] = useState({
    uid: searchParams.get("uid"),
    uname: searchParams.get("uname"),
    name: searchParams.get("name"),
    pfp_url:
      getDecodedPfpUrl(
        searchParams.get("pfp_url"),
        searchParams.get("token")
      ) || "",
    is_active: searchParams.get("is_active") === "true",
    last_seen: searchParams.get("last_seen") || "",
  });
  const [messages, setMessages] = useState<Message>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetchMessages(cid);
      setMessages(response);
    })();
  }, []);

  return (
    <section className="flex flex-col items-start justify-start gap-2 w-full h-full">
      <div className="sticky top-24 w-full h-16 border-b pb-6 px-2 lg:px-4 pt-2 z-10 bg-base-100">
        <div className="flex items-center justify-between h-full w-full gap-2">
          <div className="flex items-center gap-4 w-full">
            <FaArrowLeft
              onClick={() => router.back()}
              className="h-6 w-6 cursor-pointer"
            />
            <Pfp
              src={interlocutor.pfp_url}
              style="w-12 h-12 lg:w-14 lg:h-14 rounded-md"
            />
            <div className="flex flex-col">
              <Link href={`/profile/${interlocutor.uid}`}>
                <h1 className="text-xl lg:text-2xl font-semibold cursor-pointer">
                  {interlocutor.name}
                </h1>
              </Link>
              <div className="flex items-center gap-2">
                {interlocutor.is_active && (
                  <span class="relative flex size-3">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
                  </span>
                )}
                <p className="text-base text-base-content">
                  {interlocutor.is_active
                    ? "Online"
                    : "Last seen on " +
                      new Date(interlocutor.last_seen).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {messages && messages.length > 0 ? (
        <div className="flex flex-col w-full h-full p-3 overflow-y-auto">
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <PiChatCenteredSlashLight className="text-5xl text-base-content" />
          <p className="text-2xl text-base-content">No messages yet...</p>
        </div>
      )}
      <div className="sticky bottom-0 w-full border-t p-3 z-10 bg-base-100">
        <div className="flex items-center justify-between h-full w-full gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full border p-3 rounded-md h-full bg-base-200"
            placeholder="Type a message"
          />
          <button
            onClick={() =>
              sendMessage({
                cid: cid,
                messages: newMessage,
              })
            }
            className="bg-base-200 p-2.5 rounded-md h-full w-12 border"
          >
            <IoIosSend className="text-2xl m-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatPage;
