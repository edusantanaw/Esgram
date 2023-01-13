import { Like } from "@prisma/client";

export interface ILoadLikeUsecase {
  execute: (postId: string) => Promise<Like[] | null>;
}
