import { Comments } from "@prisma/client";
import { iComment } from "../../repository/comment";

export interface ILoadCommetsUsecase {
  execute: (postId: string) => Promise<iComment[] | null>;
}
