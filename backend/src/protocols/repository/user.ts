import { User as userReponse } from "@prisma/client";
import { User } from "../../entities/user";

export type updateUser = {
  id: string;
  email: string;
  name: string;
  bio: string | null;
  perfilPhoto: string | null;
};

export interface IUserRepository {
  findByEmail: (email: string) => Promise<userReponse | null>;
  create: (Data: User) => Promise<userReponse>;
  findById: (id: string) => Promise<userReponse | null>;
}
