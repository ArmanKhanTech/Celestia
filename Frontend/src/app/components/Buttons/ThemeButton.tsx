"use client";

import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

import { ThemeContext } from "@/context/ThemeProvider";
import ThemeDialog from "@/components/Dialogs/ThemeDialog";

const ThemeButton = () => {
  const { changeTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        className="rounded-full w-full lg:w-28 bg-base-100 border-2 px-6 py-2"
        onClick={toggleDropdown}
      >
        Theme
      </button>
      <ThemeDialog
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
        handleOnClick={handleOnClick}
      />
    </>
  );
};

export default ThemeButton;
