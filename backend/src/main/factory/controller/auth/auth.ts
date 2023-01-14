import AuthController from "../../../../controllers/auth/authController";
import { EmailValidator } from "../../../../helpers/emailValidator";
import { makeAuthUsecase } from "../../usecase/auth/authusecase";

export function makeAuthController() {
  const authUsecase = makeAuthUsecase();
  const emailValidator = new EmailValidator()
  return new AuthController(authUsecase, emailValidator);
}
