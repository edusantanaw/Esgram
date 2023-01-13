import { IPostRepository } from "../../protocols/repository/post";
import { IUserRepository } from "../../protocols/repository/user";
import { data } from "../../protocols/usecases/post/create";

export class CreatePostUsecase {
  constructor(
    private readonly postRepository: IPostRepository,
    private readonly userRepository: IUserRepository
  ) {}

  async execute(data: data) {
    const user = await this.userRepository.findById(data.authorId)
    if(!user) throw "User not found!"
    const post = await this.postRepository.create(data)
    return post
  }
}
