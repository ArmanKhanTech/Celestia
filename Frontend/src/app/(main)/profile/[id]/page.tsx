/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { FaUser, FaExchangeAlt } from "react-icons/fa";

import useAccount from "@/hooks/useAccount";
import { UserContext } from "@/context/UserProvider";
import { auth } from "@/lib/firebase";
import Loading from "@/components/Common/Loading";

const ProfilePage = () => {
  const { id } = useParams();

  const { currentUser } = useContext(UserContext);

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingPfp, setLoadingPfp] = useState(false);
  const [loadingName, setLoadingName] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const { getDetails, changeName, setStatus, setPfp } = useAccount();

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
          {user.pfp_url ? (
            <Image
              src={user.pfp_url}
              alt="Profile Picture"
              width={256}
              height={256}
              className="rounded-md w-36 h-36 object-cover mt-4"
            />
          ) : (
            <div className="w-36 h-36 mt-4 rounded-md bg-base-300 flex items-center justify-center">
              <FaUser className="w-12 h-12" />
            </div>
          )}
          {currentUser.uid === id && (
            <>
              <div className="flex flex-col items-start w-full lg:w-[40%] justify-start mt-4">
                <p className="text-base font-light mt-2">
                  Change Profile Picture:
                </p>
                <input
                  className="text-lg border w-full rounded-md cursor-pointer bg-base-200 mt-2"
                  accept="image/png, image/jpeg, image/jpg, image/gif"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  onChange={(e) => {
                    setUser({
                      ...user,
                      pfp_url: URL.createObjectURL(e.target.files[0]),
                    });
                  }}
                />
                <button
                  className="bg-base-content w-full text-base-100 font-semibold rounded-md p-2 mt-2"
                  onClick={async () => {
                    setLoadingPfp(true);
                    const file = document.getElementById("file_input").files[0];
                    await setPfp(currentUser.uid, file);
                    setLoadingPfp(false);
                  }}
                  disabled={loadingPfp}
                >
                  {loadingPfp ? (
                    <Loading
                      props={
                        "h-6 w-6 fill-base-100 text-base-content text-center m-auto"
                      }
                    />
                  ) : (
                    "Change"
                  )}
                </button>
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PNG, JPG, JPEG or GIF (Max. 800x400px & 1MB).
                </p>
              </div>
            </>
          )}
          <div className="flex flex-col items-start w-full lg:w-[40%] justify-start mt-4 gap-4">
            <div>
              <p className="text-base font-light">Username:</p>
              <p className="text-xl font-semibold">{user.uname}</p>
            </div>
            <div className="w-full">
              <p className="text-base font-light">Name:</p>
              {currentUser.uid === id ? (
                <span className="flex flex-row gap-2">
                  <input
                    type="text"
                    className="text-xl font-semibold w-full border rounded-md p-2 mt-2"
                    value={user.name}
                    required
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                  <button
                    className="bg-base-content text-base-100 rounded-md p-2 mt-2"
                    onClick={async () => {
                      setLoadingName(true);
                      await changeName(currentUser.uid, user.name);
                      setLoadingName(false);
                    }}
                    disabled={loadingName}
                  >
                    {loadingName ? (
                      <Loading props={"h-6 w-6 fill-base-100"} />
                    ) : (
                      <FaExchangeAlt className="w-6 h-6" />
                    )}
                  </button>
                </span>
              ) : (
                <p className="text-xl font-semibold">{user.name}</p>
              )}
            </div>
            <div className="w-full">
              <p className="text-base font-light">
                Status:
                {!user.status && (
                  <span className="text-red-500"> (No status set)</span>
                )}
              </p>
              {currentUser.uid === id ? (
                <span className="flex flex-row gap-2">
                  <input
                    type="text"
                    className="text-xl font-semibold w-full border rounded-md p-2 mt-2"
                    value={user.status}
                    required
                    onChange={(e) =>
                      setUser({ ...user, status: e.target.value })
                    }
                  />
                  <button
                    className="bg-base-content text-base-100 rounded-md p-2 mt-2"
                    onClick={async () => {
                      setLoadingStatus(true);
                      await setStatus(currentUser.uid, user.status);
                      setLoadingStatus(false);
                    }}
                    disabled={loadingStatus}
                  >
                    {loadingStatus ? (
                      <Loading props={"h-6 w-6 fill-base-100"} />
                    ) : (
                      <FaExchangeAlt className="w-6 h-6" />
                    )}
                  </button>
                </span>
              ) : (
                <p className="text-xl font-semibold">{user.status}</p>
              )}
            </div>
            <div>
              <p className="text-base font-light">Date Joined:</p>
              <p className="text-xl font-semibold">
                {new Date(user.date_join).toLocaleDateString()}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>User not found</p>
      )}
    </section>
  );
};

export default ProfilePage;
