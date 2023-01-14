import { PostRepository } from "../../../../repository/post.repository";
import { UpdatePostUsecase } from "../../../../usecases/post/update";

export function makeUpdatePostUsecase() {
  const postRepository = new PostRepository();
  return new UpdatePostUsecase(postRepository);
}
