import { LoadChatMessagesController } from "../../../../controllers/chat/loadMessage";
import { makeLoadChatUsecase } from "../../usecase/chat/load";

export function makeLoadMessagesController() {
  const LoadChatUsecase = makeLoadChatUsecase();
  return new LoadChatMessagesController(LoadChatUsecase);
}
