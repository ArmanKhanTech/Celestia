/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import ChatListTile from "@/components/Home/ChatList/ChatListTile";
import ChatListHeader from "@/components/Home/ChatList/ChatListHeader";
import useChats from "@/hooks/useChats";
import { UserContext } from "@/context/UserProvider";
import Loading from "@/components/Common/Loading";
import ChatListPlaceholder from "@/components/Home/ChatList/ChatListPlaceholder";
import GroupListHeader from "@/components/Home/Group/GroupListHeader";
import GroupListPlaceholder from "@/components/Home/Group/GroupListPlaceholder";

type Chat = {
  cid: number;
  pfp_url: string;
  uid: string;
  uname: string;
  name: string;
  recentMessage: string;
  recentMessageTimestamp: string;
};

const HomePage = () => {
  const pathname = usePathname();
  const isChatPage = pathname.includes("/chat/");

  const [chats, setChats] = useState<Chat[]>([]);
  const [groups, setGroups] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);
  const [openChats, setOpenChats] = useState<boolean>(true);
  const [openGroups, setOpenGroups] = useState<boolean>(false);

  const { fetchConversations } = useChats();

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const fetch = async () => {
      if (currentUser) {
        Promise.all([
          setChats(await fetchConversations(currentUser.uid)),
          // setGroups(await fetchConversations(currentUser.uid)),
        ]);
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
    <section className="flex flex-row w-full h-full">
      <section
        className={`${openChats ? "flex" : "hidden"} lg:flex flex-col p-3 lg:p-6 items-start justify-start text-start gap-2 w-full h-full lg:max-w-1/2 lg:border-r`}
      >
        <div className="flex w-full gap-2 justify-between items-center">
          <p className="text-3xl font-semibold text-start">Chats</p>
          <button
            onClick={() => {
              setOpenChats(false);
              setOpenGroups(true);
            }}
            className="rounded-full w-1/2 lg:hidden py-2 text-end flex gap-2 justify-end items-center"
            href="/home"
          >
            <p className="text-2xl">Groups</p>
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
        {chats && chats.length > 0 ? (
          <>
            <ChatListHeader />
            {chats.map((chat) => (
              <ChatListTile
                key={chat.cid}
                chat={
                  {
                    cid: chat.cid,
                    pfp_url: chat.interlocutor.pfp_url,
                    uid: chat.interlocutor.uid,
                    name: chat.interlocutor.name,
                    uname: chat.interlocutor.uname,
                    recentMessage: chat.recentMessage,
                    recentMessageTimestamp: chat.recentMessageTimestamp,
                  } as Chat
                }
              />
            ))}
          </>
        ) : (
          <ChatListPlaceholder />
        )}
      </section>
      <section
        className={`${openGroups ? "flex" : "hidden"} lg:flex flex-col p-3 lg:p-6 items-start justify-start text-start gap-2 w-full h-full lg:max-w-1/2 lg:border-r`}
      >
        <div className="flex w-full gap-2 justify-between items-center">
          <button
            onClick={() => {
              setOpenChats(true);
              setOpenGroups(false);
            }}
            className="rounded-full w-1/2 lg:hidden py-2 text-start flex gap-2 justify-start items-center"
            href="/home"
          >
            <FaArrowLeft className="w-5 h-5" />
            <p className="text-2xl">Chats</p>
          </button>
          <p className="text-3xl font-semibold text-start">Groups</p>
        </div>
        {groups && groups.length > 0 ? (
          <>
            <GroupListHeader />
            {groups.map((chat) => (
              <ChatListTile
                key={chat.cid}
                chat={
                  {
                    cid: chat.cid,
                    pfp_url: chat.interlocutor.pfp_url,
                    uid: chat.interlocutor.uid,
                    name: chat.interlocutor.name,
                    uname: chat.interlocutor.uname,
                    recentMessage: chat.recentMessage,
                    recentMessageTimestamp: chat.recentMessageTimestamp,
                  } as Chat
                }
              />
            ))}
          </>
        ) : (
          <GroupListPlaceholder />
        )}
      </section>
    </section>
  );
};

export default HomePage;
