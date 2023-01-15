import { badRequest, catchError, ok } from "../../helpers/httpReponse";
import { IPost } from "../../protocols/repository/post";
import { IUpdatePostUsecase } from "../../protocols/usecases/post/update";

export class UpdatePostController {
  constructor(private readonly updatePostUsecase: IUpdatePostUsecase) {}

  async handle(data: IPost) {
    const { authorId, content, image } = data;
    try {
      if (!authorId) return badRequest("Author id is required!");
      if (!content && !image) return badRequest("Post content is invalid!");
      const updatedPost = await this.updatePostUsecase.execute(data);
      return ok(updatedPost);
    } catch (error) {
      return catchError(error);
    }
  }
}
