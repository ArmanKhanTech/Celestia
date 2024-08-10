import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineWechat } from "react-icons/ai";

import ThemeButton from "@/components/ThemeButton";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

    return (
        <header className="relative flex max-w-5xl flex-col overflow-hidden lg:mx-auto lg:flex-row lg:items-center">
        <Link
          href="/"
          className="flex cursor-pointer items-center whitespace-nowrap text-2xl"
        >
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
        <label
          className="absolute top-2 right-2 cursor-pointer lg:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          className={`flex w-full flex-col items-center justify-between overflow-auto ${isNavOpen ? 'block' : 'hidden'} lg:flex lg:flex-row`}
        >
          <ul className="flex flex-col items-center space-y-2 mt-4 lg:mt-0 lg:ml-auto lg:flex-row lg:space-y-0">
            <li className="lg:mr-8">
              <ThemeButton />
            </li>
            <li>
              <button className="rounded-full border-2 px-6 py-1">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;