import { IoCloseSharp } from "react-icons/io5";
import { themes } from "@/lib/constants";

type Props = {
  isOpen: boolean;
  toggleDropdown: () => void;
  handleOnClick: (theme: string) => void;
};

const ThemeDialog = ({ isOpen, toggleDropdown, handleOnClick }: Props) => {
  return (
    <div
      className={`fixed inset-0 z-50 p-5 grid h-screen w-screen place-items-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="relative w-full max-w-96 max-h-96 rounded-md text-lg leading-relaxed bg-base-200">
        <div className="flex items-center p-4 text-2xl antialiased font-semibold leading-snug shrink-0">
          <span>Choose a theme</span>
          <button className="ml-auto" onClick={toggleDropdown}>
            <IoCloseSharp />
          </button>
        </div>
        <ul className="flex flex-col px-4 space-y-2 overflow-y-scroll max-h-72">
          {themes.map((theme) => (
            <li
              key={theme}
              className="flex items-center justify-between pt-4 pb-3 font-semibold cursor-pointer transition-colors border-t"
              onClick={() => handleOnClick(theme)}
            >
              <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeDialog;
