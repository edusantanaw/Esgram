import { IUserRepository } from "../../protocols/repository/user";
import { ILoadUserUsecase } from "../../protocols/usecases/user/load";

export class LoadUserUsecase implements ILoadUserUsecase {
  constructor(private readonly userRepository: IUserRepository) {}

  async loadById(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) throw "User not exists!";
    return user;
  }

  async loadAll() {
    const users = await this.userRepository.loadAll();
    return users;
  }

  async loadByName(name: string) {
    const users = await this.userRepository.findByName(name);
    return users;
  }
}
