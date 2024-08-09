'use client';

import Image from "next/image";
import Link from "next/link";
import ThemeButton from "@/components/ThemeButton";

export default function Landing() {
  return (
    <div className="overflow-x-hidden">
      <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
        <Link
          href="/"
          className="flex cursor-pointer items-center whitespace-nowrap text-2xl"
        >
          <span className="mr-2 text-4xl">
            <Image
              src="/logo.png"
              alt="Celestia"
              width={64}
              height={64} 
            />
          </span>
          Celestia
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
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
          className="flex max-h-0 w-full flex-col items-center justify-between overflow-auto transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="md:mr-12">
              <ThemeButton />
            </li>
            <li className="md:mr-12">
              <button className="rounded-full border-2 border-blue-900 px-6 py-1 text-blue-900 transition-colors hover:bg-blue-500 hover:text-white">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-10 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative">
          <div>
            <h1 className="mt-5 text-3xl leading-snug text-gray-900 sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
              A platform for{" "}
              <span className="font-bold whitespace-nowrap text-blue-600">
                aggregated sales
              </span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              deleniti perferendis magnam.
            </p>
          </div>
        </div>
        <div className="relative mt-16 mb-16 flex w-fit flex-col items-center justify-center divide-y divide-gray-200 text-gray-500 md:mt-20 lg:flex-row">
          <p className="left-0 top-0 mb-4 text-3xl font-medium text-gray-400 underline lg:absolute">
            This is how it works
          </p>
          <div className="flex w-full items-center space-x-2 border bg-white py-4 px-4 shadow-lg lg:w-56">
            <span className="text-5xl font-black text-blue-600">1</span>
            <p>Improve Sales</p>
          </div>
          <div className="flex w-full items-center space-x-2 border bg-white py-4 px-4 shadow-lg lg:mb-16 lg:w-56">
            <span className="text-5xl font-black text-blue-600">2</span>
            <p>Increase Userbase</p>
          </div>
          <div className="flex w-full items-center space-x-2 border bg-white py-4 px-4 shadow-lg lg:mb-32 lg:w-56">
            <span className="text-5xl font-black text-blue-600">3</span>
            <p>Win Marketshare</p>
          </div>
          <div className="flex w-full items-center space-x-2 border bg-white py-4 px-4 shadow-lg lg:mb-56 lg:w-56">
            <svg
              className="w-24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="rgb(37 99 235)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.2463 3.51912C13.2463 4.45527 12.9424 5.35308 12.4014 6.01504C11.9745 6.53735 11.4277 6.87906 10.8402 7L3.1533 6.99798C2.56945 6.87529 2.02629 6.53447 1.6018 6.01504C1.06083 5.35308 0.756917 4.45527 0.756917 3.51912L0.7569 2.02218C0.756897 1.83787 0.877987 1.67545 1.05463 1.62284C4.93503 0.467077 9.06813 0.46708 12.9485 1.62285C13.1252 1.67546 13.2463 1.83787 13.2463 2.02218V3.51912Z"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.99622 10.2227V13.25"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.59241 13.25H9.4001"
              ></path>
              <path
                fill="#D7E0FF"
                stroke="rgb(37 99 235)"
                d="M3.52159 6.59555C3.58217 8.50666 5.08952 10.2151 7.0016 10.2151C8.94734 10.2151 10.4129 8.53676 10.4799 6.59217C10.4925 6.22608 10.4993 5.85621 10.4993 5.48257C10.4993 3.96735 10.3982 2.4241 10.2328 1.05536C9.19364 0.823367 8.12497 0.75 7.0016 0.75C5.87822 0.75 4.78799 0.814457 3.77037 1.05536C3.59603 2.41834 3.50391 3.96735 3.50391 5.48257C3.50391 5.85749 3.50995 6.22845 3.52159 6.59555Z"
              ></path>
            </svg>
            <p>Be the last one standing</p>
          </div>
        </div>
      </div>
    </div>
  );
}