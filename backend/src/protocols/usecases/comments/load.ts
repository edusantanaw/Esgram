import { Comments } from "@prisma/client";

export interface ILoadCommetsUsecase {
  execute: (postId: string) => Promise<Comments[] | null>;
}
