import { UserCreate } from "../../entities/user";
import { IEncrypter } from "../../protocols/helpers/encrypter";
import { IGenerateToken } from "../../protocols/helpers/generateToken";
import { IUserRepository } from "../../protocols/repository/user";
import { ISignupUsecase } from "../../protocols/usecases/auth/auth";

export class SignUsecase implements ISignupUsecase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly encrypter: IEncrypter,
    private readonly generateToken: IGenerateToken
  ) {}

  async execute(data: UserCreate) {
    const verifyEmailAlreadyBeingUsed = await this.userRepository.findByEmail(
      data.email
    );
    if (verifyEmailAlreadyBeingUsed) throw "Email alredy being used!";
    const hashedPassword = await this.encrypter.genHash(data.password);
    data.password = hashedPassword;
    const user = await this.userRepository.create(data);
    const accessToken = await this.generateToken.generate(user.id);
    return { accessToken, user };
  }
}
