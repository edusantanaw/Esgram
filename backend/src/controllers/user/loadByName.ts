import {
  badRequest,
  catchError,
  notContent,
  ok,
} from "../../helpers/httpReponse";
import { ILoadUserUsecase } from "../../protocols/usecases/user/load";

export class LoadUserByNameController {
  constructor(private readonly loadUserUsecase: ILoadUserUsecase) {}

  async handle({ name }: { name: string }) {
    try {
      if (!name) return badRequest("Name is required!");
      const users = await this.loadUserUsecase.loadByName(name);
      if (users) return notContent("users");
      return ok(users);
    } catch (error) {
      return catchError(error);
    }
  }
}
