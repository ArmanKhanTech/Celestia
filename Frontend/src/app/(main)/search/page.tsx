/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useDebounce } from "use-debounce";
import { useRouter } from "next/navigation";

import useAccount from "@/hooks/useAccount";
import useChats from "@/hooks/useChats";
import { UserContext } from "@/context/UserProvider";
import Pfp from "@/components/Common/Pfp";

interface User {
  uid: string;
  uname: string;
  name: string;
  pfp_url?: string;
}

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<any[User]>([]);

  const { searchUser } = useAccount();
  const { createConversation } = useChats();

  const router = useRouter();

  const { currentUser } = useContext(UserContext);

  const [debouncedQuery] = useDebounce(query, 500);

  const search = async (uname: string) => {
    setLoading(true);
    setUsers(await searchUser(uname));
    setLoading(false);
  };

  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <section className="flex flex-col items-start justify-start w-full h-full p-3 lg:p-6">
      <div className="sticky top-20 w-full bg-base-100 pb-4">
        <p className="text-3xl font-semibold text-start">Search</p>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border p-3 rounded-md h-10 bg-base-200 mt-4"
          placeholder="Search a username"
        />
      </div>
      {query.length > 0 ? (
        !loading ? (
          <>
            {users && users.length > 0 ? (
              users.map(
                (user) =>
                  user.uid !== currentUser.uid && (
                    <div
                      key={user.uid}
                      className="flex items-center justify-between w-full py-2 border-b mb-2"
                    >
                      <div className="flex items-center gap-2">
                        <Pfp src={user.pfp_url} props="w-12 h-12 rounded-md" />
                        <div className="flex flex-col">
                          <Link href={`/profile/${user.uid}`}>
                            <p className="text-lg font-semibold">
                              {user.uname}
                            </p>
                          </Link>
                          <p className="text-base font-medium">{user.name}</p>
                        </div>
                      </div>
                      <button
                        onClick={async () => {
                          const cid = await createConversation(
                            user.uid + "," + currentUser.uid
                          );
                          if (cid) {
                            router.push(`/chat/${cid}`);
                          }
                        }}
                        className="bg-base-200 p-2 rounded-md w-12 h-12"
                      >
                        <IoIosSend className="text-2xl m-auto" />
                      </button>
                    </div>
                  )
              )
            ) : (
              <p className="text-xl mb-4 mt-1">No users found</p>
            )}
          </>
        ) : (
          <p className="text-xl mb-4 mt-1">Searching users...</p>
        )
      ) : (
        <p className="text-xl mb-4 mt-1">Search for a user</p>
      )}
    </section>
  );
};

export default SearchPage;
