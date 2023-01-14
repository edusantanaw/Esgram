import { LikeRepository } from "../../../../repository/like.repository";
import { PostRepository } from "../../../../repository/post.repository";
import { UserRepository } from "../../../../repository/user.repository";
import { LikeUsecase } from "../../../../usecases/like/like";

export function makeLikeUsecase() {
  const userRepository = new UserRepository();
  const postRepository = new PostRepository();
  const likeRepository = new LikeRepository();
  return new LikeUsecase(userRepository, likeRepository, postRepository);
}
