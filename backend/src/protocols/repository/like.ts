import { Like } from "@prisma/client";

export interface ILikeRepository {
  addLike: (postId: string, userId: string) => Promise<void>;
  removeLike: (postId: string, userId: string) => Promise<void>;
  findUserLike: (postId: string, userId: string) => Promise<Like | null>;
  loadPostLike: (postId: string) => Promise<Like[] | null>;
}
