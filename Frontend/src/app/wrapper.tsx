"use client";

import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeProvider";
import Header from "@/components/Common/Header";
import Toast from "@/components/Common/Toast";
import ScrollToTop from "@/components/Common/ScrollToTop";

const MainWrapper = ({ children }: any) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="flex flex-col min-h-screen min-w-screen"
      data-theme={theme}
    >
      <Header />
      <div className="mt-[4.75rem] flex flex-col flex-1 w-full max-w-5xl lg:border-l lg:border-r m-auto">
        {children}
      </div>
      <Toast />
      <ScrollToTop />
    </section>
  );
};

export default MainWrapper;
