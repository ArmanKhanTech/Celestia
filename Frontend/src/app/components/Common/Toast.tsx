"use client";

import { useContext } from "react";
import { MdError } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

import { ToastContext } from "@/context/ToastProvider";

const Toast = () => {
  const { message, type, hideToast } = useContext(ToastContext);

  if (!message) return null;

  return (
    <div
      id="toast-default"
      className="fixed bottom-4 m-auto right-0 left-0 flex items-center w-[75%] lg:max-w-lg p-4 bg-base-200 rounded-lg shadow-lg z-50"
      role="alert"
    >
      {type === "success" ? (
        <FaCircleCheck className="w-6 h-6 flex-shrink-0" />
      ) : (
        <MdError className="w-6 h-6 flex-shrink-0" />
      )}
      <div className="ms-3 text-lg font-normal">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8"
        onClick={hideToast}
        aria-label="Close"
      >
        <IoCloseOutline className="w-6 h-6 flex-shrink-0" />
      </button>
    </div>
  );
};

export default Toast;
