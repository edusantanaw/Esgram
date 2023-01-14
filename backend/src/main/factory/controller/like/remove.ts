import { RemoveLikeController} from "../../../../controllers/like/remove";
import { makeLikeUsecase } from "../../usecase/like/like";

export function makeAddLikeController() {
  const addLikeUsecase = makeLikeUsecase();
  return new RemoveLikeController(addLikeUsecase);
}
