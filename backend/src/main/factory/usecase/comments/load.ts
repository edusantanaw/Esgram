import { CommentRepository } from "../../../../repository/comment.repository";
import { LoadPostCommentUsecase } from "../../../../usecases/comments/load";

export function makeLoadPostComments() {
  const commentRepository = new CommentRepository();
  return new LoadPostCommentUsecase(commentRepository);
}
