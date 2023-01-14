import { Encrypter } from "../../../../helpers/encrypter";
import { GenerateToken } from "../../../../helpers/generateToken";
import { UserRepository } from "../../../../repository/user.repository";
import { SignUsecase } from "../../../../usecases/auth/signup";

export function makeSignupUsecase() {
  const userRepository = new UserRepository();
  const encrypter = new Encrypter();
  const generateToken = new GenerateToken();
  return new SignUsecase(userRepository, encrypter, generateToken);
}
