import { LoadFollowingController } from "../../../../controllers/follow/loadFollowing";
import { makeLoadFollowUsecase } from "../../usecase/follows/load";

export function makeLoadFollowingsController() {
  const loadFollowsUsecase = makeLoadFollowUsecase();
  return new LoadFollowingController(loadFollowsUsecase);
}
