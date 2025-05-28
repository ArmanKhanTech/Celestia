"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineWechat } from "react-icons/ai";

import useAuth from "@/hooks/useAuth";
import LoadingAnim from "@/components/Common/LoadingAnim";
import { UserContext } from "@/context/UserProvider";
import AlreadyLogged from "@/components/Common/AlreadyLogged";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [justLoggedIn, setJustLoggedIn] = useState<boolean>(false);

  const { currentUser } = useContext(UserContext);

  const { signIn, forgotPassword } = useAuth();

  if (currentUser && !justLoggedIn) {
    return <AlreadyLogged />;
  }

  return (
    <section className="flex flex-col h-full w-full m-auto items-center justify-center p-5">
      <h2 className="mt-5 text-center text-2xl font-semibold">
        Sign in to your account
      </h2>
      <div className="mt-10 w-full lg:max-w-lg grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Email address
          </label>
          <div className="mt-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-md text-lg border px-4 py-2 shadow-sm"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-lg font-medium">
              Password
            </label>
            <button
              onClick={async () => {
                setLoading(true);
                await forgotPassword(email);
                setLoading(false);
              }}
              className="text-base"
            >
              Forgot password?
            </button>
          </div>
          <div className="mt-2">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-md text-lg border px-4 py-2 shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:col-span-2 items-center justify-between mt-3 gap-5">
          <button
            onClick={async () => {
              setLoading(true);
              const result: boolean = await signIn(email, password);
              setLoading(false);
              if (result) {
                setJustLoggedIn(true);
                setTimeout(() => {
                  setJustLoggedIn(false);
                }, 2000);
              }
            }}
            className="flex w-full justify-center rounded-md bg-base-content p-2 text-lg font-semibold leading-6 shadow-sm"
          >
            {loading ? (
              <LoadingAnim props={"h-6 w-6 fill-base-100"} />
            ) : (
              <p className="text-base-100">Sign In</p>
            )}
          </button>
          <Link href="/signup">
            <p className="mt-4 text-center text-lg">Not a member?</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
