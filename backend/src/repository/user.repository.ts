import { User } from "../entities/user";
import { client, user } from "../prisma/client";
import { IUserRepository, updateUser } from "../protocols/repository/user";

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

  async findByName(name: string) {
    const users = await client.$queryRaw`
    select * from users
    where name like ${`${name}%`}`;
    return users;
  }

  async update(data: updateUser) {
    const updatedUser = await user.update({
      where: { id: data.id },
      data: data,
    });
    return updatedUser;
  }

  async loadAll() {
    const users = await user.findMany();
    if (users.length === 0) return null;
    return users;
  }
}
