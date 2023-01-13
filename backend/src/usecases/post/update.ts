import { IPost, IPostRepository } from "../../protocols/repository/post";

export class UpdatePostUsecase {
  constructor(private readonly postRepository: IPostRepository) {}

  async execute(data: IPost) {
    const post = await this.postRepository.findById(data.id);
    if (!post) throw "Post not found!";
    const updatedPost = await this.postRepository.update(data);
    return updatedPost;
  }
}
