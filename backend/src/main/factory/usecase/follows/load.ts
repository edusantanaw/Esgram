import { FollowsRepository } from "../../../../repository/follower.repository";
import { LoadFollowsUsecase } from "../../../../usecases/follows/loadFollows";

export function makeLoadFollowUsecase() {
  const followsRepository = new FollowsRepository();
  return new LoadFollowsUsecase(followsRepository);
}
