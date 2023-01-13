import { User } from "../entities/user";
import { user } from "../prisma/client";
import { userRepository } from "../protocols/repository/user";

export class UserRepository implements userRepository {
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
