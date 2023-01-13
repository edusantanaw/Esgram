import { IPost, IPostRepository } from "../../protocols/repository/post";
import { IUpdatePostUsecase } from "../../protocols/usecases/post/update";

export class UpdatePostUsecase implements IUpdatePostUsecase {
  constructor(private readonly postRepository: IPostRepository) {}

  async execute(data: IPost) {
    const post = await this.postRepository.findById(data.id);
    if (!post) throw "Post not found!";
    const updatedPost = await this.postRepository.update(data);
    return updatedPost;
  }
}
