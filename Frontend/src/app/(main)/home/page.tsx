/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useContext } from "react";

import ChatListTile from "@/components/Home/ChatList/ChatListTile";
import ChatListHeader from "@/components/Home/ChatList/ChatListHeader";
import useChats from "@/hooks/useChats";
import { UserContext } from "@/context/UserProvider";
import Loading from "@/components/Common/Loading";

type Chat = {
  cid: number;
  pfp_url: string;
  uname: string;
  name: string;
  recentMessage: string;
  recentMessageTimestamp: string;
};

const HomePage = () => {
  const pathname = usePathname();
  const isChatPage = pathname.includes("/chat/");

  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);

  const { fetchConversations } = useChats();

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const fetch = async () => {
      if (currentUser) {
        setChats(await fetchConversations(currentUser.uid));
      }
      setLoading(false);
    };

    fetch();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loading text="Loading Chats..." />
      </div>
    );
  }

  return (
    <section className="flex flex-col items-start justify-start w-full h-full p-3 lg:p-6">
      <p className="text-3xl font-semibold text-start">Chats</p>
      <ChatListHeader />
      {chats && chats.length > 0 ? (
        chats.map((chat) => (
          <ChatListTile
            key={chat.cid}
            chat={
              {
                cid: chat.cid,
                pfp_url: chat.interlocutor.pfp_url,
                name: chat.interlocutor.name,
                uname: chat.interlocutor.uname,
                recentMessage: chat.recentMessage,
                recentMessageTimestamp: chat.recentMessageTimestamp,
              } as Chat
            }
          />
        ))
      ) : (
        <p className="text-lg font-semibold">No Chats Found</p>
      )}
    </section>
  );
};

export default HomePage;
