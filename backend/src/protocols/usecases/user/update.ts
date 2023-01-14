import { User } from "@prisma/client";
import { updateUser } from "../../repository/user";

export interface IUpdateUserUsecase {
  execute: (data: updateUser) => Promise<User>;
}
