import { Post } from "@prisma/client";
import { dataPaginate } from "../global/dataPaginate";

export type IPostCreate = {
  authorId: string;
  content?: string;
  image?: string;
};

export type IPost = {
  authorId: string;
  content?: string;
  image?: string;
  id: string;
};

export interface IPostRepository {
  create: (data: IPostCreate) => Promise<Post>;
  findById: (id: string) => Promise<Post | null>;
  update: (data: IPost) => Promise<Post>;
  delete: (postId: string) => Promise<void>;
  getFeed: (data: dataPaginate) => Promise<IPost[] | null>;
  userPost: (data: dataPaginate) => Promise<IPost[] | null>;
  loadAll: () => Promise<Post[] | null>;
}
