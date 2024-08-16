import Link from "next/link";
import { PiChatCenteredSlashLight } from "react-icons/pi";

const ChatListPlaceholder = () => {
  return (
    <div className="flex flex-col p-4 items-start justify-center text-start gap-2 w-full h-full lg:max-w-96 lg:border-r overflow-y-auto">
      <PiChatCenteredSlashLight className="text-6xl text-start" />
      <div className="text-3xl">
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
