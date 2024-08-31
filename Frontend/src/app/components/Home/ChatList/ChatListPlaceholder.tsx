import Link from "next/link";
import { PiChatCenteredSlashLight } from "react-icons/pi";

const ChatListPlaceholder = () => {
  return (
    <div className="flex flex-col p-4 items-start justify-center text-start gap-2 w-full h-full lg:max-w-1/2">
      <PiChatCenteredSlashLight className="text-6xl text-start" />
      <div className="text-3xl ml-[2px]">
        <h2>No were chats found.</h2>
        <p>
          <Link href="/search" className="text-blue-500">
            Search
          </Link>{" "}
          for a username to begin.
        </p>
      </div>
    </div>
  );
};

export default ChatListPlaceholder;
