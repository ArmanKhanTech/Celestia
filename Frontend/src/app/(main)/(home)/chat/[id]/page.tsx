"use client";

import React, { useState } from "react";

import ChatList from "@/components/Home/ChatList/ChatList";
import Chat from "@/components/Home/Chat/Chat";

const ChatPage = () => {
  return (
    <section className="h-full w-full">
      <Chat />
    </section>
  );
};

export default ChatPage;
