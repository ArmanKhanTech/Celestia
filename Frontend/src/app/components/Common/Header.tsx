"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineWechat } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import ThemeButton from "@/components/Common/ThemeButton";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="sticky top-0 lg:max-h-20 w-full px-5 py-5 border-b flex flex-col gap-4 justify-between lg:mx-auto lg:flex-row lg:items-center z-50">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex cursor-pointer items-center text-2xl">
          <AiOutlineWechat className="text-4xl mr-2" />
          <span className="font-bold">Celestia</span>
        </Link>
        <input
          type="checkbox"
          className="peer hidden"
          id="navbar-open"
          checked={isNavOpen}
          onChange={handleNavToggle}
        />
        <label className="cursor-pointer lg:hidden" htmlFor="navbar-open">
          {isNavOpen ? (
            <IoCloseSharp className="text-3xl" />
          ) : (
            <IoMdMenu className="text-3xl" />
          )}
        </label>
      </div>
      <nav
        className={`lg:flex lg:items-end lg:justify-end ${isNavOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col w-full lg:self-end items-center space-y-3 lg:ml-auto lg:flex-row lg:space-x-2 lg:space-y-0">
          <li className="w-full lg:w-28">
            <ThemeButton />
          </li>
          {/* TODO: Hide the button if already logged in. */}
          <li className="w-full lg:w-28">
            <div className="rounded-full text-center lg:w-28 border-2 px-6 py-1 bg-base-100 w-full">
              <Link href="/login">Login</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
