import { useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import axios from "axios";

import { auth } from "@/lib/firebase";
import { ToastContext } from "@/context/ToastProvider";
import { headers } from "next/headers";

const useAuth = () => {
  const { showToast } = useContext(ToastContext);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const signin = async (email, password) => {
    if (!email || !password) {
      showToast("Please fill in all fields.", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      showToast("Invalid email.", "error");
      return;
    }

    if (password.length < 6) {
      showToast("Password should be atleast 6 characters.", "error");
      return;
    }

    try {
      // await signInUser();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const signup = async (email, password, name, username) => {
    if (!email || !password || !name || !username) {
      showToast("Please fill in all fields.", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      showToast("Invalid email.", "error");
      return;
    }

    if (name.length < 3) {
      showToast("Name should be atleast 3 characters.", "error");
      return;
    }

    if (password.length < 6) {
      showToast("Password should be atleast 6 characters.", "error");
      return;
    }

    if (username.length < 3) {
      showToast("Username should be atleast 3 characters.", "error");
      return;
    }

    const usernameExists = await checkIfUsernameExists(username);
    if (!usernameExists) {
      try {
        // await signUpUser();
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        showToast(error.message, "error");
        return;
      }
    } else {
      showToast("Username already exists.", "error");
      return;
    }
  };

  const logout = async () => {
    setLoading(true);

    try {
      // await signOutUser();
      await auth.signOut();
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const forgotPassword = async (email) => {
    if (!email) {
      showToast("Please fill in email.", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      showToast("Invalid email.", "error");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      showToast("Password reset email sent.", "success");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const checkIfUsernameExists = async (username) => {
    const res = axios.post(
      "http://localhost/auth/verify",
      {
        username: username,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log(res.data.exists);

    return res.data.exists;
  };

  return { signin, signup, logout, forgotPassword };
};

export default useAuth;
