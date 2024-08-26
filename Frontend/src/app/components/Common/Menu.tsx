"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FaHome, FaUser, FaCog, FaInfoCircle, FaSearch } from "react-icons/fa";

import { auth } from "@/lib/firebase";
import { UserContext } from "@/context/UserProvider";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Home");
  const uid = useContext(UserContext).currentUser.uid;

  useEffect(() => {
    const path = window.location.pathname.split("/")[1];
    setSelectedItem(path.charAt(0).toUpperCase() + path.slice(1));
  }, []);

  const menuItems = [
    { icon: <FaHome />, name: "Home", link: "/home" },
    { icon: <FaSearch />, name: "Search", link: "/search" },
    { icon: <FaUser />, name: "Profile", link: `/profile/${uid}` },
    { icon: <FaCog />, name: "Settings", link: "/settings" },
    { icon: <FaInfoCircle />, name: "About", link: "/about" },
  ];

  return (
    <section className="p-2 lg:p-4">
      <div className="lg:hidden w-full flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`p-2 ${selectedItem === item.name ? "bg-base-200 rounded-md" : ""}`}
            onClick={() => setSelectedItem(item.name)}
          >
            <span className="text-2xl">{item.icon}</span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:grid lg:w-full lg:grid-cols-1 lg:gap-4 text-lg">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`flex items-center p-2 cursor-pointer ${selectedItem === item.name ? "bg-base-200 rounded-md" : ""}`}
            onClick={() => setSelectedItem(item.name)}
          >
            <div className="mr-2">{item.icon}</div>
            <div>{item.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Menu;
