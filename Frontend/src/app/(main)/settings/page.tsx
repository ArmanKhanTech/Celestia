"use client";

import { useState, useContext } from "react";

import useAuth from "@/hooks/useAuth";
import LoadingAnim from "@/components/Common/LoadingAnim";
import useAccount from "@/hooks/useAccount";
import { UserContext } from "@/context/UserProvider";
import ConfirmAccountDeletion from "../../components/Dialogs/ConfirmAccountDeletion";

const SettingsPage = () => {
  const [loggingOut, setLoggingOut] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(false);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState<string>("");

  const loading = loggingOut || deletingAccount;

  const { currentUser } = useContext(UserContext);
  const { logOut } = useAuth();
  const { deleteAccount } = useAccount();

  return (
    <section className="flex flex-col items-start justify-start w-full h-full p-3 lg:p-6">
      <p className="text-3xl font-semibold text-start">Settings</p>
      <hr className="w-full my-3" />

      {/* Logout Button */}
      <button
        onClick={async () => {
          setLoggingOut(true);
          await logOut();
          setLoggingOut(false);
        }}
        className="px-4 py-2 w-[50%] lg:w-[25%] text-white font-bold text-center bg-red-500 rounded-md"
        disabled={loading}
      >
        {loggingOut ? (
          <LoadingAnim style="h-6 w-6 text-red-500 fill-white m-auto" />
        ) : (
          "Log Out"
        )}
      </button>

      {/* Delete Account Button */}
      <button
        onClick={() => {
          setShowPasswordModal(true);
          setDeletingAccount(true);
        }}
        className="px-4 py-2 w-[50%] lg:w-[25%] text-white font-bold text-center bg-red-500 rounded-md mt-5"
        disabled={loading}
      >
        {deletingAccount ? (
          <LoadingAnim style="h-6 w-6 text-red-500 fill-white m-auto" />
        ) : (
          "Delete Account"
        )}
      </button>

      {/* Password Modal */}
      {showPasswordModal && (
        <ConfirmAccountDeletion
          currentUser={currentUser}
          deleteAccount={deleteAccount}
          setShowPasswordModal={setShowPasswordModal}
          setDeletingAccount={setDeletingAccount}
          setPassword={setPassword}
          password={password}
          isOpen={showPasswordModal}
        />
      )}
    </section>
  );
};

export default SettingsPage;
