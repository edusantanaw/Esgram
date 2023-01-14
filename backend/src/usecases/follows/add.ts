import { IFollowsRepository } from "../../protocols/repository/follows";
import { IUserRepository } from "../../protocols/repository/user";
import { IAddFollowUsecase } from "../../protocols/usecases/follows/add";

export class AddFollowUsecase implements IAddFollowUsecase {
  constructor(
    private readonly followsRepository: IFollowsRepository,
    private readonly userRepository: IUserRepository
  ) {}

  async execute(userId: string, followingId: string) {
    const user = await this.userRepository.findById(userId);
    if (!user) throw "User not exists!";
    const userFollownig = await this.followsRepository.loadFollowing(userId);
    if (userFollownig) {
      const verifyUserAlreadyFollowing = userFollownig.filter(
        (follows) => follows.followingId === followingId
      );
      if (verifyUserAlreadyFollowing)
        throw "User already following this person";
    }
    await this.followsRepository.add(userId, followingId);
    return;
  }
}
