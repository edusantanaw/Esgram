import { DeletePostController } from "../../../../controllers/posts/delete";
import { makeDeletePostUsecase } from "../../usecase/post/delete";

export function makeDeletePostController() {
  const deletePostUsecase = makeDeletePostUsecase();
  return new DeletePostController(deletePostUsecase);
}
