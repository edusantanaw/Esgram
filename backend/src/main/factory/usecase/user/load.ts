import { UserRepository } from "../../../../repository/user.repository";
import { LoadUserUsecase } from "../../../../usecases/user/load";

export function loadUserUsecase() {
  const userRepository = new UserRepository();
  return new LoadUserUsecase(userRepository);
}
