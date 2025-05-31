import { IoCloseSharp } from "react-icons/io5";

type Props = {
  currentUser: { uid: string };
  deleteAccount: (uid: string, password: string) => Promise<void>;
  setShowPasswordModal: (show: boolean) => void;
  setDeletingAccount: (deleting: boolean) => void;
  setPassword: (password: string) => void;
  password: string;
  isOpen: boolean;
};

const ConfirmAccountDeletion = ({
  currentUser,
  deleteAccount,
  setShowPasswordModal,
  setDeletingAccount,
  setPassword,
  password,
  isOpen,
}: Props) => {
  return (
    <div
      className={`fixed inset-0 z-50 p-5 grid h-screen w-screen place-items-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="bg-base-200 rounded-md p-4 w-[90%] max-w-md">
        <button>
          <IoCloseSharp
            className="text-2xl cursor-pointer"
            onClick={() => {
              setShowPasswordModal(false);
              setDeletingAccount(false);
              setPassword("");
            }}
          />
        </button>
        <p className="text-lg font-semibold mb-2">Confirm Account Deletion</p>
        <p className="text-sm mb-4">Please enter your password to continue:</p>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded font-semibold w-full"
          onClick={async () => {
            setShowPasswordModal(false);
            await deleteAccount(currentUser.uid, password);
            setDeletingAccount(false);
            setPassword("");
          }}
        >
          Confirm Deletion
        </button>
      </div>
    </div>
  );
};

export default ConfirmAccountDeletion;
