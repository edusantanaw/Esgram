import { IPostRepository } from "../../protocols/repository/post";
import { IUserRepository } from "../../protocols/repository/user";
import { data, IDeletePostUsecase } from "../../protocols/usecases/post/delete";

export class DeletePostUsecase implements IDeletePostUsecase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly postRepository: IPostRepository
  ) {}

  async execute(data: data): Promise<void> {
    const user = await this.userRepository.findById(data.userId);
    if (!user) throw "User not found!";
    const post = await this.postRepository.findById(data.postId);
    if (!post) throw "Post not found!";
    if (post.authorId !== user.id) throw "Denied!";
    await this.postRepository.delete(data.postId);
    return;
  }
}
