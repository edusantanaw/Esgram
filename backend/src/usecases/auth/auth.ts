import { IEncrypter } from "../../protocols/helpers/encrypter";
import { IGenerateToken } from "../../protocols/helpers/generateToken";
import { IUserRepository } from "../../protocols/repository/user";
import { IAuthUsecase } from "../../protocols/usecases/auth/auth";

export class AuthUsecase implements IAuthUsecase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly encrypter: IEncrypter,
    private readonly generateToken: IGenerateToken
  ) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw "User not found!";
    const verifyPassword = await this.encrypter.compare(
      password,
      user.password
    );
    if (!verifyPassword) throw "Password is invalid!";
    const accessToken = await this.generateToken.generate(user.id);
    return { accessToken, user };
  }
}
