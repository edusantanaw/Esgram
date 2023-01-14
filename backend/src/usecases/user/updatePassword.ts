import { IEncrypter } from "../../protocols/helpers/encrypter";
import { IUserRepository } from "../../protocols/repository/user";
import { IUpdateUserPasswordUsecase } from "../../protocols/usecases/user/updatePassword";

export class UpdateUserPasswordUsecase implements IUpdateUserPasswordUsecase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly encrypter: IEncrypter
  ) {}
  async execute(data: { id: string; password: string }) {
    const user = await this.userRepository.findById(data.id);
    if (!user) throw "User not exists!";
    const hashedPassword = await this.encrypter.genHash(data.password);
    await this.userRepository.updatePassword(data.id, hashedPassword);
    return;
  }
}
