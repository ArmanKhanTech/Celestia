"use client";

import ChatList from "@/components/Home/ChatList/ChatList";
import Chat from "@/components/Home/Chat/Chat";

const HomeWrapper = ({ children }: any) => {
  return (
    <section className="flex h-full w-full">
      {/* TODO: Add placeholder if the list is empty */}
      <ChatList />
      <div className="flex-grow overflow-auto">{children}</div>
    </section>
  );
};

export default HomeWrapper;
