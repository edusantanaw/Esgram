import { Post } from "@prisma/client";
import { IPost } from "../../repository/post";

export interface IUpdatePostUsecase {
  execute: (data: IPost) => Promise<Post>;
}
