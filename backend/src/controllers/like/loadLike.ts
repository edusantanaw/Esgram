import { Like } from "@prisma/client";
import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";

interface ILoadLikeUsecase {
  execute: (postId: string) => Promise<Like[] | null>;
}

export class LoadPostLikesUsecase {
  constructor(private readonly loadLikeUsecase: ILoadLikeUsecase) {}
  async handle({ postId }: { postId: string }) {
    try {
      if (!postId) return badRequest("Post id is required!");
      const userLikes = await this.loadLikeUsecase.execute(postId);
      if (!userLikes) return notContent("users likes");
      return ok(userLikes);
    } catch (error) {
      return catchError(error);
    }
  }
}
