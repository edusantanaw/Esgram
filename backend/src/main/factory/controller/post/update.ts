import { UpdatePostController } from "../../../../controllers/posts/update";
import { makeUpdatePostUsecase } from "../../usecase/post/update";

export function makeUpdatePostController() {
  const updatePostUsecase = makeUpdatePostUsecase();
  return new UpdatePostController(updatePostUsecase);
}
