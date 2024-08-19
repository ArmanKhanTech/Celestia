"use client";

import Menu from "@/components/Common/Menu";

const MainWrapper = ({ children }: any) => {
  return (
    <section className="flex-1 flex h-full min-w-full flex-row">
      <div className="fixed h-full bg-base-100 w-14 lg:w-40 border-r">
        <Menu />
      </div>
      <div className="flex-grow ml-14 lg:ml-40">{children}</div>
    </section>
  );
};

export default MainWrapper;
