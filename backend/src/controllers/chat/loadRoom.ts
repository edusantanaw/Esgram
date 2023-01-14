import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";
import { ILoadChatUsecase } from "../../protocols/repository/chat";

export class LoadRoomController {
  constructor(private readonly loadChatUseCase: ILoadChatUsecase) {}

  async handle({ follower, userId }: { userId: string; follower: string }) {
    try {
      if (!follower) return badRequest("Follower is required!");
      if (!userId) return badRequest("User id is required!");
      const room = await this.loadChatUseCase.loadRoom(userId, follower);
      if (!room) return notContent("room");
      return ok(room);
    } catch (error) {
      return catchError(error);
    }
  }
}
