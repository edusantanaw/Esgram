import { AddLikeController } from "../../../../controllers/like/add";
import { makeLikeUsecase } from "../../usecase/like/like";

export function makeAddLikeController() {
  const addLikeUsecase = makeLikeUsecase();
  return new AddLikeController(addLikeUsecase);
}
