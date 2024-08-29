"use client";

import { useState } from "react";

import useAuth from "@/hooks/useAuth";
import LoadingAnim from "@/components/Common/LoadingAnim";

const SettingsPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { logOut } = useAuth();

  return (
    <section className="flex flex-col items-start justify-start w-full h-full p-3 lg:p-6">
      <p className="text-3xl font-semibold text-start">Settings</p>
      <hr className="w-full my-3" />
      <button
        onClick={async () => {
          setLoading(true);
          await logOut();
          setLoading(false);
        }}
        className="px-4 py-2 w-[50%] lg:w-[25%] text-white font-bold text-center bg-red-500 rounded-md"
      >
        {loading ? (
          <LoadingAnim props={"h-6 w-6 text-red-500 fill-white m-auto"} />
        ) : (
          "Log Out"
        )}
      </button>
    </section>
  );
};

export default SettingsPage;
