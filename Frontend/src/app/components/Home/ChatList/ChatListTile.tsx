import Image from "next/image";
import { FaUser } from "react-icons/fa";

type ChatListTileProps = {
  chat: {
    id: number;
    avatar: string;
    name: string;
    message: string;
  };
};

const ChatListTile = ({ chat }: ChatListTileProps) => {
  return (
    <div
      key={chat.id}
      className="flex items-center cursor-pointer w-full py-3 border-b"
    >
      {chat.avatar ? (
        <Image
          width={40}
          height={40}
          src={chat.avatar}
          alt={`${chat.name}'s avatar`}
          className="w-10 h-10 rounded-full mr-4"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-base-300 mr-4 flex items-center justify-center">
          <FaUser className="w-4 h-4" />
        </div>
      )}
      <div>
        <div className="font-bold">{chat.name}</div>
        <div className="font-medium">{chat.message}</div>
      </div>
    </div>
  );
};

export default ChatListTile;
