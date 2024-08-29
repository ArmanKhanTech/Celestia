import Image from "next/image";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

type ChatListTileProps = {
  chat: {
    cid: number;
    pfp_url: string;
    name: string;
    uname: string;
    recentMessage: string;
    recentMessageTimestamp: string;
  };
};

const ChatListTile = ({ chat }: ChatListTileProps) => {
  return (
    <div
      key={chat.cid}
      className="flex items-center cursor-pointer w-full py-3 border-b gap-3"
    >
      {chat.pfp_url ? (
        <Image
          src={chat.pfp_url}
          alt={`${chat.name}'s Profile Picture`}
          width={64}
          height={64}
          className="rounded-md w-16 h-16 object-cover"
        />
      ) : (
        <div className="w-16 h-16 rounded-md bg-base-300 flex items-center justify-center">
          <FaUser className="w-8 h-8" />
        </div>
      )}
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between gap-2">
          <Link href={`/chat/${chat.cid}`} className="font-bold">
            {chat.name}
          </Link>
        </div>
        <div className="font-medium">
          {chat.recentMessage
            ? chat.recentMessage.length > 30
              ? chat.recentMessage.slice(0, 30) + "..."
              : chat.recentMessage
            : "Begin a conversation"}
        </div>
        <div className="text-sm text-base-content">
          {chat.recentMessageTimestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatListTile;
