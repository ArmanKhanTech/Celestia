"use client";

import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeProvider";
import Header from "@/components/Common/Header";
import Toast from "@/components/Common/Toast";

const MainWrapper = ({ children }: any) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="flex flex-col min-h-screen min-w-screen not-scrollable"
      data-theme={theme}
    >
      <Header />
      <div className="mt-[4.75rem] flex flex-col flex-1 scrollable">
        {children}
      </div>
      <Toast />
    </section>
  );
};

export default MainWrapper;
