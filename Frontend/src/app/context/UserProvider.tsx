"use client";

import { createContext, useState, useEffect } from "react";
import { User } from "firebase/auth";

import { auth } from "@/lib/firebase";

interface UserContextType {
  currentUser: User | null | undefined;
}

export const UserContext = createContext<UserContextType>({
  currentUser: undefined,
});

export const UserProvider = ({ children }: any) => {
  // Initialize with undefined to indicate loading state
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
