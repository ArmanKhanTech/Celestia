"use client";

import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

import { ThemeContext } from "@/context/ThemeProvider";

export default function ThemeSwap() {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const { changeTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (theme: string) => {
    if (changeTheme) {
      changeTheme(theme);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="rounded-full border-2 px-6 py-1"
        onClick={toggleDropdown}
      >
        Theme
      </button>
      <div
        className={`fixed inset-0 z-50 px-5 grid h-screen w-screen place-items-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="relative w-full max-w-96 max-h-96 rounded-lg text-lg leading-relaxed backdrop-blur-lg shadow-2xl"
        >
          <div className="flex items-center p-4 text-2xl antialiased font-semibold leading-snug shrink-0">
            <span>Choose a theme</span>
            <button className="ml-auto" onClick={toggleDropdown}>
              <IoCloseSharp />
            </button>
          </div>
          <ul className="flex flex-col px-4 space-y-2 overflow-y-auto max-h-72">
            {themes.map((theme) => (
              <li
                key={theme}
                className="flex items-center justify-between py-4 font-semibold cursor-pointer transition-colors border-b"
                onClick={() => handleOnClick(theme)}
              >
                <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
