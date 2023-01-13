import { badRequest, catchError, ok } from "../../helpers/httpReponse";
import { iComment } from "../../protocols/repository/comment";
import { IAddNewCommentUsecase } from "../../protocols/usecases/comments/add";

export class AddNewComment {
  constructor(private readonly addNewCommentUsecase: IAddNewCommentUsecase) {}
  async handle(data: iComment) {
    const { authorId, content, postId } = data;
    try {
      if (!authorId) return badRequest("Author id is required!");
      if (!content) return badRequest("Content is required!");
      if (!postId) return badRequest("Post id is required!");
      const newComment = await this.addNewCommentUsecase.execute(data);
      return ok(newComment);
    } catch (error) {
      return catchError(error);
    }
  }
}
