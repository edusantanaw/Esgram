import { badRequest, catchError, ok } from "../../helpers/httpReponse";
import { data, ILikeUsecase } from "../../protocols/usecases/like/like";

export class RemoveLikeController {
  constructor(private readonly likeUsecase: ILikeUsecase) {}

  async handle(data: data) {
    const { postId, userId } = data;
    try {
      if (!userId) return badRequest("User id is required!");
      if (!postId) return badRequest("Post id is required!");
      await this.likeUsecase.remove(data);
      return ok(true);
    } catch (error) {
      return catchError(error);
    }
  }
}
