import { PostRepository } from "../../../../repository/post.repository";
import { LoadPostUsecase } from "../../../../usecases/post/load";

export function makeLoadPostUsecase() {
  const postRepository = new PostRepository();
  return new LoadPostUsecase(postRepository);
}
