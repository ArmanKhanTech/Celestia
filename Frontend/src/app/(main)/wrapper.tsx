"use client";

import Menu from "@/components/Common/Menu";

const MainWrapper = ({ children }: any) => {
  return (
    <section className="flex flex-row h-full w-full flex-grow overflow-auto">
      <Menu />
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default MainWrapper;
