import { User } from "@prisma/client";

export interface ILoadUserUsecase {
  loadById: (id: string) => Promise<User>;
  loadAll: () => Promise<User[] | null>;
  loadByName: (name: string) => Promise<User[] | null>;
}
