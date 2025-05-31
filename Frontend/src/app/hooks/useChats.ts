import axios from "axios";
import { useContext, useEffect, useRef } from "react";

import { ToastContext } from "@/context/ToastProvider";

const useChats = () => {
  const { showToast } = useContext(ToastContext);

  const socketRef = useRef<WebSocket | null>(null);

  const sendMessage = (message) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(message));
    } else {
      showToast("Unable to send message", "error");
    }
  };

  const receiveMessage = (message: any) => {
    console.log("Received message:", message);
    // Handle the received message (e.g., update state or UI)
  };

  // TODO: Create socket connection only once
  useEffect(() => {
    // Note: Directly sending request to the socket server because
    // proxy is not yet configured for WebSocket protocol.
    socketRef.current = new WebSocket("ws://localhost:3003");

    socketRef.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    socketRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      receiveMessage(message);
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (socketRef.readyState === 1) {
        socketRef.close();
      }
    }
  }, []);

  const createConversation = async (participants: string) => {
    try {
      const response = await axios.post(
        "http://localhost/chat/createConversation",
        {
          participants: participants.split(","),
        },
      );
      return response.data.cid;
    } catch (error) {
      showToast(error.message, "error");
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
      return response.data || [];
    } catch (error) {
      showToast(error.message, "error");
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
      return response.data || [];
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return {
    createConversation,
    fetchConversations,
    fetchMessages,
    sendMessage,
    receiveMessage
  };
};

export default useChats;
