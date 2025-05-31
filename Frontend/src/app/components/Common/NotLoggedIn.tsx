import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const NotLoggedIn = () => {
  return (
    <div className="flex-grow m-auto">
      <div className="text-center">
        <p className="text-lg font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Login to continue
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          You need to login to access this page.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/login"
            className="rounded-md bg-base-content text-base-100 px-3.5 py-2.5 text-sm font-semibold"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedIn;
