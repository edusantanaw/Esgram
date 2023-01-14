import { badRequest, catchError, ok } from "../../helpers/httpReponse";
import { IAddFollowUsecase } from "../../protocols/usecases/follows/add";

export class AddFollowController {
  constructor(private readonly addFollowUsecase: IAddFollowUsecase) {}

  async handle(data: { userId: string; followingId: string }) {
    const { followingId, userId } = data;
    try {
      if (!userId) return badRequest("User id is required!");
      if (!followingId) return badRequest("Following id is required!");
      await this.addFollowUsecase.execute(userId, followingId);
      return ok(true);
    } catch (error) {
      return catchError(error);
    }
  }
}
