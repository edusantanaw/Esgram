import { iComment } from "../../protocols/repository/comment";
import { IAddNewCommentUsecase } from "../../protocols/usecases/comments/add";
import { CommentRepository } from "../../repository/comment.repository";
import { PostRepository } from "../../repository/post.repository";
import { UserRepository } from "../../repository/user.repository";

export class AddNewCommentUsecase implements IAddNewCommentUsecase {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly userRepository: UserRepository,
    private readonly postRepository: PostRepository
  ) {}

  async execute(data: iComment) {
    const user = await this.userRepository.findById(data.authorId);
    if (!user) throw "User not found!";
    const post = await this.postRepository.findById(data.postId);
    if (!post) throw "Post not found!";
    const comment = await this.commentRepository.create(data);
    return comment;
  }
}
