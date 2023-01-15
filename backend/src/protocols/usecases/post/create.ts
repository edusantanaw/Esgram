import { Post } from "@prisma/client";

export type data = {
  image?: {filename: string};
  content?: string;
  authorId: string;
};

export interface ICreatePostUsecase {
  execute: (data: data) => Promise<Post>;
}
