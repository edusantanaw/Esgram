import { PostRepository } from "../../../../repository/post.repository";
import { UserRepository } from "../../../../repository/user.repository";
import { CreatePostUsecase } from "../../../../usecases/post/create";

export function makeCreatePostUsecase() {
  const postRepository = new PostRepository();
  const userRepository = new UserRepository();
  return new CreatePostUsecase(postRepository, userRepository);
}
