import { LoadFollowerController } from "../../../../controllers/follow/loadFollower";
import { makeLoadFollowUsecase } from "../../usecase/follows/load";

export function makeLoadFollowersController() {
  const loadFollowsUsecase = makeLoadFollowUsecase();
  return new LoadFollowerController(loadFollowsUsecase);
}
