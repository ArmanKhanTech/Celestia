"use client";

import { createContext, useEffect, useState } from "react";

interface ToastContextType {
  message?: string;
  type?: string;
  showToast?: (message: string, type: string) => void;
  hideToast?: () => void;
}

export const ToastContext = createContext<ToastContextType>({});

export const ToastProvider = ({ children }: any) => {
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<string>("");

  const showToast = (message: string, type: string) => {
    setMessage(message);
    setType(type);
  };

  const hideToast = () => {
    setMessage("");
    setType("");
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setType("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <ToastContext.Provider value={{ showToast, hideToast, message, type }}>
      {children}
    </ToastContext.Provider>
  );
};
