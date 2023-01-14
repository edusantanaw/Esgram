import { LoadPostLikesUsecase } from "../../../../controllers/like/loadLike";
import { makeLoadLikeUsecase } from "../../usecase/like/load";

export function makeLoadPostLikesController() {
  const loadLikeUsecase = makeLoadLikeUsecase();
  return new LoadPostLikesUsecase(loadLikeUsecase);
}
