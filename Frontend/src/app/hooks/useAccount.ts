import axios from "axios";
import { useContext } from "react";
import {
  ref as storageRef,
  deleteObject,
  getMetadata
} from "firebase/storage";
import {
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider
} from "firebase/auth";

import { ToastContext } from "@/context/ToastProvider";
import { storage, auth } from "@/lib/firebase";
import { UserContext } from "../context/UserProvider";

const useAccount = () => {
  const { showToast } = useContext(ToastContext);
  const { currentUser } = useContext(UserContext);

  const getDetails = async (uid) => {
    try {
      const res = await axios.get(
        `http://localhost/user/getDetails?uid=${uid}`,
        { headers: { "Content-Type": "application/json" } },
      );
      return res.data;
    } catch (error) {
      showToast(error.message, "error");
      return null;
    }

    return null;
  };

  const searchUser = async (uname) => {
    if (!uname) {
      showToast("Username cannot be empty", "error");
      return null;
    }

    try {
      const res = await axios.get(
        `http://localhost/user/searchUser?uname=${uname}`,
        { headers: { "Content-Type": "application/json" } },
      );
      return res.data.result;
    } catch (error) {
      showToast(error.message, "error");
      return null;
    }

    return null;
  };

  const changeName = async (uid, name) => {
    if (!name) {
      showToast("Name cannot be empty", "error");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost/user/changeName`,
        { uid, name },
        { headers: { "Content-Type": "application/json" } },
      );
      showToast("Name change successful", "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const setStatus = async (uid, status) => {
    if (!status) {
      showToast("Status cannot be empty", "error");
      return;
    }

    if (status.length > 100) {
      showToast("Status cannot be more than 100 characters", "error");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost/user/setStatus`,
        { uid, status },
        { headers: { "Content-Type": "application/json" } },
      );
      showToast("Status change successful", "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const setPfp = async (uid, file) => {
    if (!file) {
      showToast("Please select a file", "error");
      return;
    }

    if (file.size > 1000000) {
      showToast("File size too large", "error");
      return;
    }

    try {
      const fileRef = storageRef(storage, `pfp/${uid}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      await axios.post(
        `http://localhost/user/setPfp`,
        { uid, pfp_url: url },
        { headers: { "Content-Type": "application/json" } },
      );
      showToast("Profile picture updated", "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const deleteAccount = async (uid, password) => {
    try {
      if (!uid || !password) {
        showToast("UID or password are required", "error");
        return;
      }

      if (!currentUser) {
        showToast("No user is currently logged in", "error");
        return;
      }

      if (currentUser.uid !== uid) {
        showToast("You can only delete your own account", "error");
        return;
      }

      // Re-authenticate user
      const credential = EmailAuthProvider.credential(currentUser.email, password);
      await reauthenticateWithCredential(currentUser, credential);

      // Delete from Firebase Storage 
      const pfpRef = storageRef(storage, `pfp/${currentUser.uid}`);
      try {
        await getMetadata(pfpRef); // Check if file exists
        await deleteObject(pfpRef);
      } catch (storageError) {
        if (storageError.code !== "storage/object-not-found") {
          throw storageError;
        }
      }

      // Delete from your database
      await axios.delete("http://localhost/user/deleteAccount", {
        data: { uid },
        headers: { "Content-Type": "application/json" }
      });

      // Delete from Firebase Auth
      await deleteUser(currentUser);

      showToast("Account deleted successfully", "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  };


  return { getDetails, changeName, setStatus, setPfp, searchUser, deleteAccount };
};

export default useAccount;
