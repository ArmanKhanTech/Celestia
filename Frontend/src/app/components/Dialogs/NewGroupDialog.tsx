import { IoCloseSharp } from "react-icons/io5";

type NewGroupDialogProps = {
  isOpened: boolean;
  onClose: () => void;
};

const NewGroupDialog = ({ isOpened, onClose }: NewGroupDialogProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 p-5 grid h-screen w-screen place-items-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${isOpened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} `}
    >
      <div className="relative overflow-y-auto w-full max-w-96 p-5 max-h-96 rounded-lg text-lg leading-relaxed bg-base-200">
        <div className="flex items-center text-2xl antialiased font-semibold leading-snug shrink-0">
          <span>New Group</span>
          <button className="ml-auto" onClick={onClose}>
            <IoCloseSharp />
          </button>
        </div>
        <form className="flex flex-col mt-4 w-full gap-4">
          <div>
            <label htmlFor="group-name">Group Name</label>
            <input
              type="text"
              id="group-name"
              className="w-full p-2 rounded-md lg mt-1 border"
              placeholder="Group Name"
            />
          </div>
          <div>
            <label htmlFor="group-description">Group Description</label>
            <textarea
              id="group-description"
              className="w-full p-2 rounded-md border mt-1"
              placeholder="Group Description"
            />
          </div>
          <button
            className="bg-base-content text-base-100 font-semibold rounded-md p-2"
            type="submit"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewGroupDialog;
