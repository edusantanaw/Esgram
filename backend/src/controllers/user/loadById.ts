import { badRequest, catchError, ok } from "../../helpers/httpReponse";
import { ILoadUserUsecase } from "../../protocols/usecases/user/load";

export class LoadUserByIdController {
  constructor(private readonly loadUserUsecase: ILoadUserUsecase) {}

  async handle({ id }: { id: string }) {
    try {
      if (!id) return badRequest("Id is required!");
      const user = await this.loadUserUsecase.loadById(id);
      return ok(user);
    } catch (error) {
      return catchError(error);
    }
  }
}
