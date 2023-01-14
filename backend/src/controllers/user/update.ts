import { badRequest, catchError, ok } from "../../helpers/httpReponse";
import { IValidator } from "../../protocols/helpers/validator";
import { updateUser } from "../../protocols/repository/user";
import { IUpdateUserUsecase } from "../../protocols/usecases/user/update";

export class UpdateUserController {
  constructor(
    private readonly updateUserUsecase: IUpdateUserUsecase,
    private readonly emailValidator: IValidator
  ) {}

  async handle(data: updateUser) {
    const { bio, email, id, name } = data;
    try {
      if (!id) return badRequest("User id is required!");
      if (!bio) return badRequest("Bio is required!");
      if (!email) return badRequest("Email is required!");
      if (!name) return badRequest("Name is required!");
      const validEmail = this.emailValidator.isValid(email);
      if (!validEmail) return badRequest("Email is invalid!");
      const updatedUser = await this.updateUserUsecase.execute(data);
      return ok(updatedUser);
    } catch (error) {
      return catchError(error);
    }
  }
}
