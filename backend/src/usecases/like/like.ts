import { ILikeRepository } from "../../protocols/repository/like";
import { IPostRepository } from "../../protocols/repository/post";
import { IUserRepository } from "../../protocols/repository/user";
import { data, ILikeUsecase } from "../../protocols/usecases/like/like";

export class likeUsecase implements ILikeUsecase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly likeRepository: ILikeRepository,
    private readonly postRepository: IPostRepository
  ) {}

  async add(data: data): Promise<void> {
    const user = await this.userRepository.findById(data.userId);
    if (!user) throw "User not found!";
    const post = await this.postRepository.findById(data.postId);
    if (!post) throw "Post not found!";
    const userLike = await this.likeRepository.findUserLike(
      data.postId,
      data.userId
    );
    if (userLike) throw "User already add an like at this post!";
    await this.likeRepository.addLike(data.postId, data.userId);
    return;
  }

  async remove(data: data): Promise<void> {
    const verifyLikeExists = await this.likeRepository.findUserLike(
      data.postId,
      data.userId
    );
    if (!verifyLikeExists) throw "Like not found!";
    await this.likeRepository.removeLike(data.postId, data.userId);
    return;
  }
}
