type Message = {
  mid: string;
  message: string;
  sender: string;
  sent_at: string;
  receiver: string;
  received_at: string;
  status: string;
  type: string;
};

type RecentChat = {
  cid: number;
  interlocutor: {
    pfp_url: string;
    uid: string;
    uname: string;
    name: string;
    is_active: boolean;
    last_seen: string;
  };
  recentMessage: string;
  recentMessageTimestamp: string;
};

type RecentGroupChat = {
  // TODO
};

export type { Message, RecentChat, RecentGroupChat };
