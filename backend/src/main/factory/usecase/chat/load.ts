import { ChatRepository } from "../../../../repository/chat.repository";
import { LoadChatUsecase } from "../../../../usecases/chat/loadChat";

export function makeLoadChatUsecase() {
  const chatRepository = new ChatRepository();
  return new LoadChatUsecase(chatRepository);
}
