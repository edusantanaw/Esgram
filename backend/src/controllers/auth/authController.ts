import { badRequest, catchError, ok } from "../../helpers/httpReponse";import { IValidator } from "../../protocols/helpers/validator";
import { IAuthUsecase } from "../../protocols/usecases/auth/auth";

export default class AuthController {
  constructor(
    private readonly authUsecase: IAuthUsecase,
    private readonly emailValidator: IValidator
  ) {}

  async handle(data: { email: string; password: string }) {
    const { email, password } = data;
    try {
      if (!email) return badRequest("Email is required!");
      if (!password) return badRequest("Password is required!");
      const isValid = this.emailValidator.isValid(email);
      if (!isValid) return badRequest("Email is invalid!");
      const { accessToken, user } = await this.authUsecase.execute(
        email,
        password
      );
      return ok({ accessToken, user });
    } catch (error) {
      return catchError(error);
    }
  }
}
