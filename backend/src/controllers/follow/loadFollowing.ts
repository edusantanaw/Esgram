import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";
import { ILoadFollowsUsecase } from "../../protocols/usecases/follows/load";

export class LoadFollowingController {
  constructor(private readonly loadFollowsUsecase: ILoadFollowsUsecase) {}

  async handle({ userId }: { userId: string }) {
    try {
      if (!userId) return badRequest("User id is required!");
      const following = await this.loadFollowsUsecase.loadFollowings(userId);
      if (!following) return notContent("following");
      return ok(following);
    } catch (error) {
      return catchError(error);
    }
  }
}
