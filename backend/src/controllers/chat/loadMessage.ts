import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";
import { ILoadChatUsecase } from "../../protocols/repository/chat";

export class LoadChatMessages {
  constructor(private readonly loadChatUseCase: ILoadChatUsecase) {}

  async handle({ follower, userId }: { userId: string; follower: string }) {
    try {
      if (!follower) return badRequest("Follower is required!");
      if (!userId) return badRequest("User id is required!");
      const messages = await this.loadChatUseCase.loadMessages(
        userId,
        follower
      );
      if (!messages) return notContent("messages");
      return ok(messages);
    } catch (error) {
      return catchError(error);
    }
  }
}
