import axios from "axios";
import { useContext } from "react";
import {
  ref as storageRef,
  deleteObject
} from "firebase/storage";
import {
  deleteUser
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
  };

  const searchUser = async (uname) => {
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
  };

  const changeName = async (uid, name) => {
    if (!name) {
      showToast("Name cannot be empty", "error");
      return null;
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
    } finally {
      return;
    }
  };

  const setStatus = async (uid, status) => {
    if (!status) {
      showToast("Status cannot be empty", "error");
      return null;
    }

    if (status.length > 100) {
      showToast("Status cannot be more than 100 characters", "error");
      return null;
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
    } finally {
      return;
    }
  };

  const setPfp = async (uid, file) => {
    if (!file) {
      showToast("Please select a file", "error");
      return null;
    }

    if (file.size > 1000000) {
      showToast("File size too large", "error");
      return null;
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
    } finally {
      return;
    }
  };

  const deleteAccount = async (uid) => {
    try {
      await axios.delete(
        `http://localhost/user/deleteAccount`,
        {
          data: { uid },
          headers: { "Content-Type": "application/json" }
        }
      );

      // Delete from Firebase Auth
      await deleteUser(currentUser);

      // Delete from Firebase Storage
      const pfpRef = storageRef(storage, `pfp/${currentUser.uid}`);
      await deleteObject(pfpRef);

      showToast("Account deleted successfully", "success");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      return;
    }
  };

  return { getDetails, changeName, setStatus, setPfp, searchUser, deleteAccount };
};

export default useAccount;
