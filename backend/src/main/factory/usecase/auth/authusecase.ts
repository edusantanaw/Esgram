import { Encrypter } from "../../../../helpers/encrypter";
import { GenerateToken } from "../../../../helpers/generateToken";
import { UserRepository } from "../../../../repository/user.repository";
import { AuthUsecase } from "../../../../usecases/auth/auth";

export function makeAuthUsecase() {
  const userRepository = new UserRepository();
  const encrypter = new Encrypter();
  const generateToken = new GenerateToken();
  return new AuthUsecase(userRepository, encrypter, generateToken);
}
