"use client";

type Props = {
  message: {
    sender: string;
    message: string;
  };
};

const ChatBubble = ({ message }: Props) => {
  return (
    <div className="inline-flex flex-col mb-2 bg-base-300 self-end p-2 rounded-md max-w-max">
      <p className="text-sm font-semibold self-start">{message.sender}</p>
      <div className="self-start text-lg">{message.message}</div>
      <p className="text-xs font-light self-end">
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
};

export default ChatBubble;
