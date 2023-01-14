import { LoadPostById } from "../../../../controllers/posts/loadById";
import { makeLoadPostUsecase } from "../../usecase/post/load";

export function makeLoadPostByIdController() {
  const loadPostUsecase = makeLoadPostUsecase();
  return new LoadPostById(loadPostUsecase);
}
