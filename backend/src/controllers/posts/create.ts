import { badRequest, catchError, ok } from "../../helpers/httpReponse";
import { data, ICreatePostUsecase } from "../../protocols/usecases/post/create";

export class CreatePostController {
  constructor(private readonly createPostUsecase: ICreatePostUsecase) {}
  async handle(data: data) {
    const { image, content, authorId } = data;
    try {
      if (!image && !content)
        return badRequest("Content or image is necessary!");
        console.log(image)
      if (!authorId) return badRequest("user id is required!");
      const post = await this.createPostUsecase.execute(data);
      return ok(post);
    } catch (error) {
      console.log(error)
      return catchError(error);
    }
  }
}
