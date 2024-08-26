import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="grid min-h-full place-items-center p-10 m-auto">
      <div className="text-center">
        <p className="text-lg font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-base-content text-base-100 px-3.5 py-2.5 text-sm font-semibold"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
