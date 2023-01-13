import { badRequest, catchError, ok } from "../../helpers/httpReponse";

interface IDeletePostUsecase {
  execute: (data: data) => Promise<void>;
}
type data = {
  postId: string;
  userId: string;
};

export class DeletePostController {
  constructor(private readonly deletePostUsecase: IDeletePostUsecase) {}

  async handle({ postId, userId }: data) {
    try {
      if (!postId) return badRequest("Post id is required!");
      if (!userId) return badRequest("User id is required!");
      await this.deletePostUsecase.execute({ postId, userId });
      return ok(true);
    } catch (error) {
      return catchError(error);
    }
  }
}
