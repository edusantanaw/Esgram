import { AddFollowController } from "../../../../controllers/follow/add";
import { makeAddFollowUsecase } from "../../usecase/follows/add";

export function makeAddFollowController() {
  const addFollowUsecase = makeAddFollowUsecase();
  return new AddFollowController(addFollowUsecase);
}
