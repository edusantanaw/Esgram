import { CommentRepository } from "../../../../repository/comment.repository";
import { PostRepository } from "../../../../repository/post.repository";
import { UserRepository } from "../../../../repository/user.repository";
import { AddNewCommentUsecase } from "../../../../usecases/comments/add";

export function makeAddCommentUsecase() {
  const commentRepository = new CommentRepository();
  const postRepository = new PostRepository();
  const userRepository = new UserRepository();
  return new AddNewCommentUsecase(
    commentRepository,
    userRepository,
    postRepository
  );
}
