import { ILikeRepository } from "../../protocols/repository/like";

export class LoadLikeUsecase {
  constructor(private readonly likeRepository: ILikeRepository) {}

  async execute(postId: string) {
    const userLikes = await this.likeRepository.loadPostLike(postId);
    return userLikes;
  }
}
