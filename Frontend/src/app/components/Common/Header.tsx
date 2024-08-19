"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineWechat } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import ThemeButton from "@/components/Buttons/ThemeButton";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed top-0 m-auto right-0 left-0 lg:border-r lg:border-l lg:max-h-20 max-w-5xl w-full bg-base-100 p-5 border-b flex flex-col gap-4 justify-between lg:mx-auto lg:flex-row lg:items-center z-50">
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
        className={`lg:flex lg:items-end lg:justify-end bg-base-100 ${isNavOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col w-full lg:self-end items-center space-y-2 lg:ml-auto lg:flex-row lg:space-y-0">
          <ThemeButton />
          {/* TODO: Hide the button if already logged in. */}
          <Link
            onClick={handleNavToggle}
            className="text-center rounded-full text-center lg:w-28 border-2 px-6 py-2 bg-base-100 w-full"
            href="/login"
          >
            Login
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
