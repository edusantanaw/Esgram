import { User } from "@prisma/client";
import { badRequest, catchError, ok } from "../../helpers/httpReponse";

interface ILoadUserUsecase {
  loadById: (id: string) => Promise<User>;
  loadAll: () => Promise<User[] | null>;
  loadByName: (name: string) => Promise<User[] | null>;
}

export class LoadUserByIdController {
  constructor(private readonly loadUserUsecase: ILoadUserUsecase) {}

  async handle({ id }: { id: string }) {
    try {
      if (!id) return badRequest("Id is required!");
      const user = await this.loadUserUsecase.loadById(id);
      return ok(user);
    } catch (error) {
      return catchError(error);
    }
  }
}
