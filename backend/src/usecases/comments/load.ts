import { ICommentRepository } from "../../protocols/repository/comment";
import { ILoadCommetsUsecase } from "../../protocols/usecases/comments/load";

export class LoadPostCommentUsecase implements ILoadCommetsUsecase {
  constructor(private readonly commentRepository: ICommentRepository) {}

  async execute(postId: string) {
    const comments = await this.commentRepository.load(postId);
    return comments;
  }
}
