import { CreatePostController } from "../../../../controllers/posts/create";
import { makeCreatePostUsecase } from "../../usecase/post/create";

export function makeCreatePostController() {
  const createPostUsecase = makeCreatePostUsecase();
  return new CreatePostController(createPostUsecase);
}
