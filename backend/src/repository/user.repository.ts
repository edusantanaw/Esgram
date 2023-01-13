import { User } from "../entities/user";
import { user } from "../prisma/client";
import { IUserRepository } from "../protocols/repository/user";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string) {
    const userReponse = await user.findFirst({
      where: {
        email: email,
      },
    });
    return userReponse;
  }

  async create(data: User) {
    const newUser = await user.create({
      data: {
        ...data,
        perfilPhoto: "default.jpg",
      },
    });
    return newUser;
  }

  async findById(id: string) {
    const userReponse = await user.findFirst({ where: { id } });
    return userReponse;
  }
}
