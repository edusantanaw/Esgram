import { SignupController } from "../../../../controllers/auth/signupController";
import { EmailValidator } from "../../../../helpers/emailValidator";
import { makeSignupUsecase } from "../../usecase/auth/signupUsecase";

export function makeSignupController() {
  const signupUsecase = makeSignupUsecase();
  const emailValidator = new EmailValidator();
  return new SignupController(signupUsecase, emailValidator);
}
