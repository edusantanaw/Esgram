import { LoadUserByIdController } from "../../../../controllers/user/loadById";
import { makeLoadUserUsecase } from "../../usecase/user/load";

export function makeLoadUseByIdController() {
  const loadUserUsecas = makeLoadUserUsecase();
  return new LoadUserByIdController(loadUserUsecas);
}
