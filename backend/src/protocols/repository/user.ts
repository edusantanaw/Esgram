import { User as userReponse } from "@prisma/client";
import { User } from "../../entities/user";

export interface IUserRepository {
  findByEmail: (email: string) => Promise<userReponse | null>;
  create: (Data: User) => Promise<userReponse>;
  findById: (id: string) => Promise<userReponse | null>;
}