"use client";

import { createContext, useState, useEffect } from "react";
import { User } from "firebase/auth";

import { auth } from "@/lib/firebase";

interface UserContextType {
  currentUser: User | null;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
});

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

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
