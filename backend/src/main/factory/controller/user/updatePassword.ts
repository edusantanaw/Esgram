import { UpdateUserPasswordController } from "../../../../controllers/user/updatePassword";
import { makeUpdatePasswordUsecase } from "../../usecase/user/updatePassword";

export function makeUpdateUserPasswordController() {
  const upadteUserPasswordUsecase = makeUpdatePasswordUsecase();
  return new UpdateUserPasswordController(upadteUserPasswordUsecase);
}
