import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const AlreadyLogged = () => {
  return (
    <section className="flex flex-col h-full w-full m-auto gap-4 items-center justify-center p-5">
      <h2 className="mt-5 text-center text-2xl font-medium">
        You are already logged in
      </h2>
      <Link href="/home">
        <button className="flex flex-row w-full justify-center items-center gap-2 rounded-md bg-base-content p-2 text-lg text-base-100 font-semibold leading-6 shadow-sm">
          <p>Chats</p>
          <FaArrowRight className="w-5 h-5" />
        </button>
      </Link>
    </section>
  );
};

export default AlreadyLogged;
