import { User } from "../entities/user";
import { client, message, room } from "../prisma/client";
import { IChatRopository, user } from "../protocols/repository/chat";

export class ChatRepository implements IChatRopository {
  async loadMessageByChat(userId: string, follower: string) {
    const messages = await message.findMany({
      where: {
        OR: [
          {
            userSend: userId,
            userRec: follower,
          },
          {
            userSend: follower,
            userRec: userId,
          },
        ],
      },
    });
    if (messages.length === 0) return null;
    return messages;
  }

  async loadChats(userId: string) {
    const messages: user[] = await client.$queryRaw`
    select distinct users.id, message."userRec", message."userSend", name, "perfilPhoto" from message
    inner join users on  users.id = message."userSend" 
    where "userSend" = ${userId} or "userRec" = ${userId};`;
    if (messages.length === 0) return null;
    return messages;
  }

  async loadRoom(userId: string, followerId: string) {
    const roomId = await room.findFirst({
      where: {
        OR: [
          {
            userId: userId,
            userRecId: followerId,
          },
          {
            userId: followerId,
            userRecId: userId,
          },
        ],
      },
    });
    return roomId;
  }
}
