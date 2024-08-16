import Image from "next/image";
import { FaUser } from "react-icons/fa";

const ChatListTile = ({ chat }) => {
  return (
    <div
      key={chat.id}
      className="flex items-center cursor-pointer w-full p-3 border-b"
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
