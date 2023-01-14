import { User } from "@prisma/client";
import { UserCreate } from "../../entities/user";

export interface ISignupUsecase {
  execute: (data: UserCreate) => Promise<{ accessToken: string; user: User }>;
}
export interface IAuthUsecase {
  execute: (
    email: string,
    password: string
  ) => Promise<{ accessToken: string; user: User }>;
}
