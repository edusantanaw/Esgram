import { UserCreate } from "../../entities/user";
import { badRequest, catchError } from "../../helpers/httpReponse";
import { ISignupUsecase } from "../../protocols/usecases/auth/auth";

interface IValidator {
  isValid: (value: string) => boolean;
}

export class SignupController {
  constructor(
    private readonly signupUsecase: ISignupUsecase,
    private readonly emailValidator: IValidator
  ) {}

  async handle(data: UserCreate) {
    const { name, email, password, confirmPassword } = data;

    try {
      if (!name) return badRequest("Name is required!");
      if (!email) return badRequest("email is required!");
      if (!password) return badRequest("password is required!");
      if (password !== confirmPassword)
        return badRequest("Password must be equals");
      const isValid = this.emailValidator.isValid(email);
      if (!isValid) return badRequest("Email is invalid!");
      const { accessToken, user } = await this.signupUsecase.execute(data);
      return { accessToken, user };
    } catch (error) {
      return catchError(error);
    }
  }
}
