import { CommentRepository } from "../../../../repository/comment.repository";
import { LoadPostCommentUsecase } from "../../../../usecases/comments/load";

export function makeLoadPostCommentsUsecase() {
  const commentRepository = new CommentRepository();
  return new LoadPostCommentUsecase(commentRepository);
}
