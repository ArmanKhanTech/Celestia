import axios from "axios";
import { useContext } from "react";

import { ToastContext } from "@/context/ToastProvider";

const useAccount = () => {
  const { showToast } = useContext(ToastContext);

  const getDetails = async (uid) => {
      try {
          const res = await axios.get(
            `http://localhost/user/getdetails?uid=${uid}`,
            { headers: { "Content-Type": "application/json" } },
          );
          return res.data;
        } catch (error) {
          console.error(error);
          showToast(error.message, "error");
        } finally {
          return;
        }
  };

  return { getDetails };

}

export default useAccount;