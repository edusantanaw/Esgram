import { IEncrypter } from "../../protocols/helpers/encrypter";
import { IGenerateToken } from "../../protocols/helpers/generateToken";
import { IUserRepository } from "../../protocols/repository/user";

export class AuthUsecase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly encrypter: IEncrypter,
    private readonly generateToken: IGenerateToken
  ) {}

  async execute(email: string, password: string) {
    const userExists = await this.userRepository.findByEmail(email);
    if (!userExists) throw "User not found!";
    const verifyPassword = await this.encrypter.compare(
      password,
      userExists.password
    );
    if (!verifyPassword) throw "Password is invalid!";
    const accessToken = await this.generateToken.generate(userExists.id);
    return { accessToken, userExists };
  }
}
