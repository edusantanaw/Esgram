import { IFollowsRepository } from "../../protocols/repository/follows";
import { ILoadFollowsUsecase } from "../../protocols/usecases/follows/load";

export class LoadFollowsUsecase implements ILoadFollowsUsecase {
  constructor(private readonly followsRepository: IFollowsRepository) {}

  async loadFollowers(userId: string) {
    const followers = await this.followsRepository.loadFollowers(userId);
    return followers;
  }
  async loadFollowings(userId: string) {
    const following = await this.followsRepository.loadFollowing(userId);
    return following;
  }
}
