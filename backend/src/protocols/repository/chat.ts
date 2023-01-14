type message = {
  id: string;
  message: string;
  userSend: string;
  userRec: string;
  createdAt: Date;
};

type room = {
  id: string;
  userId: string;
  userRecId: string;
};

export type user = {
  id: string;
  email: string;
  name: string;
  bio: string | null;
  perfilPhoto: string | null;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface IChatRopository {
  loadMessageByChat: (
    userId: string,
    follower: string
  ) => Promise<message[] | null>;
  loadChats: (userId: string) => Promise<user[] | null>;
  loadRoom: (userId: string, followerId: string) => Promise<room | null>;
}
