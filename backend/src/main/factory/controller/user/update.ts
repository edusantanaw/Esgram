import { UpdateUserController } from "../../../../controllers/user/update";
import { EmailValidator } from "../../../../helpers/emailValidator";
import { makeUpdateUsecase } from "../../usecase/user/update";

export function makeUpdateUserController() {
  const updateUserUsecase = makeUpdateUsecase();
  const emailValidator = new EmailValidator();
  return new UpdateUserController(updateUserUsecase, emailValidator);
}
