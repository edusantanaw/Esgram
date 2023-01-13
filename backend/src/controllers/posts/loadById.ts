import { badRequest, catchError, notContent } from "../../helpers/httpReponse";
import { ILoadPostUsecase } from "../../protocols/usecases/post/load";

export class LoadPostById {
  constructor(private readonly loadPostUsecase: ILoadPostUsecase) {}

  async handle({ id }: { id: string }) {
    try {
      if (!id) return badRequest("Post id is required!");
      const post = await this.loadPostUsecase.loadById(id);
      return post;
    } catch (error) {
      return catchError(error);
    }
  }
}
