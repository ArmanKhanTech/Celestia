import { PiChatCenteredLight } from "react-icons/pi";

const ChatPlaceholder = () => {
  return (
    <div className="flex flex-col gap-2 p-4 items-center justify-center">
      <div className="text-3xl space-y-2">
        <PiChatCenteredLight className="text-6xl" />
        <h2>Welcome to Celestia!</h2>
        <p>Select a chat to start messaging.</p>
      </div>
    </div>
  );
};

export default ChatPlaceholder;
