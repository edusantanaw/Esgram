import { dataPaginate } from "../../protocols/global/dataPaginate";
import { IPostRepository } from "../../protocols/repository/post";

export class LoadPostUsecase {
  constructor(private readonly postRepository: IPostRepository) {}

  async loadById(id: string) {
    const post = await this.postRepository.findById(id);
    return post;
  }

  async loadFeed(data: dataPaginate) {
    const posts = await this.postRepository.getFeed(data);
    return posts;
  }

  async loadPerfil(data: dataPaginate) {
    const posts = await this.postRepository.userPost(data);
    return posts;
  }
}
