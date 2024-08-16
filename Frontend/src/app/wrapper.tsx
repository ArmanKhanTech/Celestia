"use client";

import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeProvider";
import Header from "@/components/Common/Header";
import Toast from "@/components/Common/Toast";

const MainWrapper = ({ children }: any) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="flex flex-col h-screen w-screen" data-theme={theme}>
      <Header />
      {children}
      <Toast />
    </section>
  );
};

export default MainWrapper;
