import { IChatRopository, ILoadChatUsecase, user } from "../../protocols/repository/chat";


export class LoadChatUsecase implements ILoadChatUsecase {
  constructor(private readonly chatRepository: IChatRopository) {}
  async loadMessages(userId: string, follower: string) {
    const messages = await this.chatRepository.loadMessageByChat(
      userId,
      follower
    );
    return messages;
  }

  async loadRoom(userId: string, followerId: string) {
    const room = await this.chatRepository.loadRoom(userId, followerId);
    return room;
  }

  async loadChats(userId: string) {
    const chats = await this.chatRepository.loadChats(userId);
    if (!chats) return null;
    const filteredChats = chats.filter((users: user) => users.id !== userId);
    return filteredChats;
  }
}
