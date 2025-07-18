import { useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import axios from "axios";

import { auth } from "@/lib/firebase";
import { ToastContext } from "@/context/ToastProvider";

const useAuth = () => {
  const { showToast } = useContext(ToastContext);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const checkIfUsernameExists = async (username) => {
    try {
      const res = await axios.post(
        "http://localhost/auth/verify",
        { username: username },
        { headers: { "Content-Type": "application/json" } },
      );
      return res.data.message !== "User not found";
    } catch (error) {
      showToast(error.message, "error");
      return false;
    }

    return false;
  };

  const signInUser = async () => {
    try {
      await axios.post(
        "http://localhost/auth/signin",
        { uid: auth.currentUser.uid },
        { headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const saveUser = async (user) => {
    try {
      await axios.post(
        "http://localhost/auth/signup",
        {
          uid: user.uid,
          username: user.username,
          name: user.name,
          email: user.email,
        },
        { headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const signOutUser = async () => {
    try {
      await axios.post(
        "http://localhost/auth/signout",
        { uid: auth.currentUser.uid },
        { headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const signIn = async (email, password): boolean => {
    if (!email || !password) {
      showToast("Please fill in all fields.", "error");
      return false;
    }

    if (!emailRegex.test(email)) {
      showToast("Invalid email.", "error");
      return false;
    }

    if (password.length < 6) {
      showToast("Password should be atleast 6 characters.", "error");
      return false;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      await signInUser();
      showToast("Signed in successfully.", "success");
      window.location.replace("/home");
      return true;
    } catch (error) {
      showToast(error.message, "error");
      return false;
    }

    return false;
  };

  const signUp = async (email, password, name, username): boolean => {
    if (!email || !password || !name || !username) {
      showToast("Please fill in all fields.", "error");
      return false;
    }

    if (!emailRegex.test(email)) {
      showToast("Invalid email.", "error");
      return false;
    }

    if (name.length < 3) {
      showToast("Name should be atleast 3 characters.", "error");
      return false;
    }

    if (password.length < 6) {
      showToast("Password should be atleast 6 characters.", "error");
      return false;
    }

    if (username.length < 3) {
      showToast("Username should be atleast 3 characters.", "error");
      return false;
    }

    const usernameExists = await checkIfUsernameExists(username);
    if (!usernameExists) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        await saveUser({ uid: userCredential.user.uid, username, name, email });
        showToast("Signed up successfully.", "success");
        window.location.replace("/home");
        return true;
      } catch (error) {
        showToast(error.message, "error");
        return false;
      }
    } else {
      showToast("Username already exists.", "error");
      return false;
    }

    return false;
  };

  const logOut = async () => {
    try {
      await Promise.all([
        signOutUser(),
        auth.signOut(),
      ]);
      showToast("Signed out successfully.", "success");
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
    }
  };

  return {
    signIn,
    signUp,
    logOut,
    forgotPassword,
  };
};

export default useAuth;
