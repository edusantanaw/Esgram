import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";
import { dataPaginate } from "../../protocols/global/dataPaginate";
import { ILoadPostUsecase } from "../../protocols/usecases/post/load";

export class FeedController {
  constructor(private readonly loadPostUsecase: ILoadPostUsecase) {}

  async handle(data: dataPaginate) {
    const { userId } = data;
    if (!userId) return badRequest("User id is required!");
    try {
      const posts = await this.loadPostUsecase.loadFeed(data);
      if (!posts) return notContent("Post");
      return ok(posts);
    } catch (error) {
      return catchError(error);
    }
  }
}
