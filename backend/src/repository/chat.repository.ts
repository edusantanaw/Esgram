import { User } from "../entities/user";
import { client, message } from "../prisma/client";

export class ChatRepository {
  async loadChatMessages(userId: string, follower: string) {
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
    const messages: User[] = await client.$queryRaw`
    select distinct users.id, message."userRec", message."userSend", name, "perfilPhoto" from message
    inner join users on  users.id = message."userSend" 
    where "userSend" = ${userId} or "userRec" = ${userId}
  `;
    if (messages.length === 0) return null;
    return messages;
  }
}
