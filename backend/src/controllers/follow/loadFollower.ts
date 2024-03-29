import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";
import { ILoadFollowsUsecase } from "../../protocols/usecases/follows/load";

export class LoadFollowerController {
  constructor(private readonly loadFollowsUsecase: ILoadFollowsUsecase) {}

  async handle({ userId }: { userId: string }) {
    try {
      console.log(userId)
      if (!userId) return badRequest("User id is required!");
      const followers = await this.loadFollowsUsecase.loadFollowers(userId);
      console.log(followers)
      if (!followers) return notContent("followers");
      return ok(followers);
    } catch (error) {
      return catchError(error);
    }
  }
}
