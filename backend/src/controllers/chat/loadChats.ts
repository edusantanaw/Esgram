import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";
import { ILoadChatUsecase } from "../../protocols/repository/chat";

export class LoadChatsController {
  constructor(private readonly loadChatUseCase: ILoadChatUsecase) {}

  async handle({ userId }: { userId: string }) {
    try {
      if (!userId) return badRequest("User id is required!");
      const chats = await this.loadChatUseCase.loadChats(userId);
      if (!chats) return notContent("chats");
      return ok(chats);
    } catch (error) {
      return catchError(error);
    }
  }
}
