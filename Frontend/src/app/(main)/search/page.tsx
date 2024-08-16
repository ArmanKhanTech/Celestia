"use client";

import Image from "next/image";
import { IoIosSend } from "react-icons/io";

const SearchPage = () => {
  return (
    <section className="flex-grow flex flex-col text-start items-start justify-start overflow-auto p-3 lg:p-6 gap-2 w-full h-full">
      <p className="text-3xl font-semibold text-start">Search</p>
      <input
        type="text"
        className="w-full border p-3 rounded-md h-12 bg-base-200 mt-4"
        placeholder="Search a username"
      />
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="flex items-center justify-between w-full py-2 border-b"
        >
          <div className="flex items-center gap-2">
            <Image
              width={48}
              height={48}
              src=""
              alt="User Avatar"
              className="rounded-full h-12 w-12"
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Username</p>
              <p className="text-base font-medium">Name</p>
            </div>
          </div>
          <button className="bg-base-200 p-2 rounded-md h-full w-12">
            <IoIosSend className="text-2xl m-auto" />
          </button>
        </div>
      ))}
    </section>
  );
};

export default SearchPage;
