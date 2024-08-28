import axios from "axios";
import { useContext } from "react";

import { ToastContext } from "@/context/ToastProvider";

const useChats = () => {
    const { showToast } = useContext(ToastContext);

    const createConversation = async (participants: string) => {
        try {
            const response = await axios.post("http://localhost/chat/createConversation", {
                participants: participants.split(",")
            });
            return response.data.cid;
        } catch (error) {
            showToast(error.response.data.message, "error");
        }
    }

    return { createConversation };

}

export default useChats;