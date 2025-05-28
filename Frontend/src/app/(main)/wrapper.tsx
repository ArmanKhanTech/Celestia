"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import Menu from "@/components/Common/Menu";
import Loading from "@/components/Common/Loading";
import { auth } from "@/lib/firebase";
import { UserContext } from "@/context/UserProvider";
import { ThemeContext } from "@/context/ThemeProvider";

const MainWrapper = ({ children }: any) => {
  const { currentUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      setLoading(false);
    }
  }, [currentUser]);

  if (loading) {
    return (
      <div data-theme={theme || "light"} className="min-h-screen bg-base-100">
        <Loading text="Loading Account..." />
      </div>
    );
  }

  return (
    <section
      className="flex-1 flex h-full min-w-full flex-row"
      data-theme={theme || "light"}
    >
      {currentUser && !loading ? (
        <>
          <div className="fixed h-full bg-base-100 w-14 lg:w-40 border-r">
            <Menu />
          </div>
          <div className="flex-grow ml-14 lg:ml-40">{children}</div>
        </>
      ) : (
        <div className="flex-grow m-auto">
          <div className="text-center">
            <p className="text-lg font-semibold">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Login to continue
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              You need to login to access this page.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/login"
                className="rounded-md bg-base-content text-base-100 px-3.5 py-2.5 text-sm font-semibold"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainWrapper;
