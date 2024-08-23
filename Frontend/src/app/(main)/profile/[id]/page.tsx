/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

import useAccount from "@/hooks/useAccount";

const ProfilePage = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const { getDetails } = useAccount();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getDetails(id);
      setUser(data);
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex flex-col items-start justify-start w-full h-full p-3 lg:p-6">
      {user ? (
        <>
          <p className="text-3xl font-semibold">Profile</p>
         {
           user.pfp_url ? (
            <Image
              width={96}
              height={96}
              src={user.pfp_url}
              alt="User Avatar"
              className="rounded-md w-36 h-36 mt-4"
            />
          ) : (
            <div className="w-36 h-36 mt-4 rounded-md bg-base-300 flex items-center justify-center">
              <FaUser className="w-12 h-12" />
            </div>
          )
         }
          <div className="flex flex-col items-start justify-start mt-2">
            <p className="text-xs font-light">Username:</p>
            <p className="text-xl font-semibold">{user.uname}</p>
            <p className="text-xs font-light mt-2">Name:</p>
            <p className="text-xl font-semibold capitalize">{user.name}</p>
            <p className="text-xs font-light mt-2">Date Joined:</p>
            <p className="text-xl font-semibold">{new Date(user.date_join).toLocaleDateString()}</p>
          </div>
        </>
      ) : (
        <p>User not found</p>
      )}
    </section>
  );
};

export default ProfilePage;
