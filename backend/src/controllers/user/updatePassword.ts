import { badRequest, catchError, ok } from "../../helpers/httpReponse";
import { IUpdateUserPasswordUsecase } from "../../protocols/usecases/user/updatePassword";

export class UpdateUserPasswordController {
  constructor(
    private readonly updatePasswordUsecase: IUpdateUserPasswordUsecase
  ) {}
  async handle({ id, password }: { id: string; password: string }) {
    try {
      if (!id) return badRequest("User id is required!");
      if (!password) return badRequest("Password id is required!");
      await this.updatePasswordUsecase.execute({ id, password });
      return ok(true);
    } catch (error) {
      return catchError(error);
    }
  }
}
