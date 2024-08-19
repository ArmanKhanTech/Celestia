"use client";

import Image from "next/image";
import { AiOutlineWechat } from "react-icons/ai";
import Link from "next/link";

const SignupPage = () => {
  return (
    <section className="flex flex-col h-full w-full m-auto items-center justify-center p-5">
      <h2 className="mt-5 text-center text-2xl font-semibold">
        Create a new account
      </h2>
      <div className="mt-10 w-full lg:max-w-lg grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="username" className="block text-lg font-medium">
            Username
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="username"
              required
              className="block w-full rounded-md text-lg border px-4 py-2 shadow-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="name"
              required
              className="block w-full rounded-md text-lg border px-4 py-2 shadow-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Email address
          </label>
          <div className="mt-2">
            <input
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
          </div>
          <div className="mt-2">
            <input
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
            type="submit"
            className="flex w-full justify-center rounded-md bg-base-content text-base-100 p-2 text-lg font-semibold leading-6 shadow-sm"
          >
            Sign Up
          </button>
          <Link href="/login">
            <p className="mt-4 text-center text-lg">Already a member?</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
