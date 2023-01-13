import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";
import { ILoadCommetsUsecase } from "../../protocols/usecases/comments/load";

export class LoadPostComments {
  constructor(private readonly loadCommentsUsecase: ILoadCommetsUsecase) {}

  async handle({ postId }: { postId: string }) {
    try {
      if (!postId) return badRequest("Post id is required!");
      const comments = await this.loadCommentsUsecase.execute(postId);
      if (!comments) return notContent("Comments");
      return ok(comments);
    } catch (error) {
      return catchError(error);
    }
  }
}
