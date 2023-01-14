import { LoadChatsController } from "../../../../controllers/chat/loadChats";
import { makeLoadChatUsecase } from "../../usecase/chat/load";

export function makeLoadChatsController() {
  const LoadChatUsecase = makeLoadChatUsecase();
  return new LoadChatsController(LoadChatUsecase);
}
