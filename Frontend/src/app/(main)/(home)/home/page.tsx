"use client";

import React, { useState } from "react";

import ChatList from "@/components/Home/ChatList/ChatList";
import ChatPlaceholder from "@/components/Home/Chat/ChatPlaceholder";

const HomePage = () => {
  return (
    <section className="hidden lg:flex justify-center items-center h-full w-full">
      <ChatPlaceholder />
    </section>
  );
};

export default HomePage;
