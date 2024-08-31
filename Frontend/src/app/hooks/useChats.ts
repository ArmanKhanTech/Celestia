import axios from "axios";
import { useContext } from "react";

import { ToastContext } from "@/context/ToastProvider";

const useChats = () => {
  const { showToast } = useContext(ToastContext);

  const createConversation = async (participants: string) => {
    try {
      const response = await axios.post(
        "http://localhost/chat/createConversation",
        {
          participants: participants.split(","),
        },
      );
      console.log(response.data);
      return response.data.cid;
    } catch (error) {
      showToast(error.response.data.message, "error");
    }
  };

  const fetchConversations = async (uid) => {
    try {
      const response = await axios.get(
        `http://localhost/chat/fetchConversations?uid=${uid}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      showToast(error.response.data.message, "error");
    }
  };

  const fetchMessages = async (cid) => {
    try {
      const response = await axios.get(
        `http://localhost/chat/fetchMessages?cid=${cid}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      showToast(error.response.data.message, "error");
    }
  }

  return { createConversation, fetchConversations, fetchMessages };
};

export default useChats;
