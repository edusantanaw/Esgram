import { LikeRepository } from "../../../../repository/like.repository";
import { LoadLikeUsecase } from "../../../../usecases/like/load";

export function makeLoadLikeUsecase() {
  const likeRepository = new LikeRepository();
  return new LoadLikeUsecase(likeRepository);
}
