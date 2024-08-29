"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { AiOutlineWechat } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

import ThemeButton from "@/components/Buttons/ThemeButton";
import { UserContext } from "@/context/UserProvider";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { currentUser } = useContext(UserContext);

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
        <ul className="flex flex-col w-full lg:self-end items-center lg:ml-auto lg:flex-row">
          <ThemeButton />
          {!currentUser ? (
            <Link
              onClick={handleNavToggle}
              className="rounded-full w-full lg:w-32 bg-base-100 border-2 px-6 py-2 text-center flex gap-2 justify-center items-center"
              href="/login"
            >
              <p>Login</p>
              <FaArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <Link
              onClick={handleNavToggle}
              className="rounded-full w-full lg:w-32 bg-base-100 border-2 px-6 py-2 text-center flex gap-2 justify-center items-center"
              href="/home"
            >
              <p>Chats</p>
              <FaArrowRight className="w-5 h-5" />
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
