"use client";

import { useContext } from "react";
import Menu from "@/components/Common/Menu";
import Loading from "@/components/Common/Loading";
import { UserContext } from "@/context/UserProvider";
import { ThemeContext } from "@/context/ThemeProvider";
import NotLoggedIn from "@/components/Common/NotLoggedIn";

const MainWrapper = ({ children }: any) => {
  const { currentUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const appliedTheme = theme || "light";

  // While loading
  if (typeof currentUser === "undefined") {
    return (
      <section
        className="flex-1 flex h-full min-w-full flex-row"
        data-theme={appliedTheme}
      >
        <Loading text="Loading Account..." />
      </section>
    );
  }

  // Once loaded, if user is not logged in
  if (currentUser === null) {
    return (
      <section
        className="flex-1 flex h-full min-w-full flex-row"
        data-theme={appliedTheme}
      >
        <NotLoggedIn />
      </section>
    );
  }

  // Logged in
  return (
    <section
      className="flex-1 flex h-full min-w-full flex-row"
      data-theme={appliedTheme}
    >
      <div className="fixed h-full bg-base-100 w-14 lg:w-40 border-r">
        <Menu />
      </div>
      <div className="flex-grow ml-14 lg:ml-40">{children}</div>
    </section>
  );
};

export default MainWrapper;
