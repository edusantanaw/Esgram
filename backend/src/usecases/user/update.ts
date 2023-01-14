import { IUserRepository, updateUser } from "../../protocols/repository/user";

export class UpdateUseusecase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: updateUser) {
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) throw "User not found!";
    if (user.email !== data.email) {
      const verifyEmail = await this.userRepository.findByEmail(data.email);
      if (verifyEmail) throw "Email already being used!";
    }

    const updatedUser = await this.userRepository.update(data);
    return updatedUser;
  }
}
