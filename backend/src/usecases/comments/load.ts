import { ICommentRepository } from "../../protocols/repository/comment";

export class LoadPostCommentUsecase {
  constructor(private readonly commentRepository: ICommentRepository) {}

  async execute(postId: string) {
    const comments = await this.commentRepository.load(postId);
    return comments;
  }
}
