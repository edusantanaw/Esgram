import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";
import { ILoadLikeUsecase } from "../../protocols/usecases/like/load";


export class LoadPostLikesUsecase {
  constructor(private readonly loadLikeUsecase: ILoadLikeUsecase) {}
  async handle({ postId }: { postId: string }) {
    try {
      if (!postId) return badRequest("Post id is required!");
      const userLikes = await this.loadLikeUsecase.execute(postId);
      if (!userLikes) return notContent("users likes");
      return ok(userLikes);
    } catch (error) {
      return catchError(error);
    }
  }
}
