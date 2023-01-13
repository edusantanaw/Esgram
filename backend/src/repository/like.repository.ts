import { Like } from "@prisma/client";
import { like } from "../prisma/client";
import { ILikeRepository } from "../protocols/repository/like";


export class LikeRepository implements ILikeRepository {
  async addLike(postId: string, userId: string) {
    await like.create({
      data: {
        postId,
        userId,
      },
    });
    return;
  }

  async removeLike(postId: string, userId: string) {
    await like.deleteMany({
      where: {
        postId,
        userId,
      },
    });
    return;
  }

  async findUserLike(postId: string, userId: string) {
    const userLike = await like.findMany({
      where: {
        userId,
        postId,
      },
    });
    if (userLike.length === 0) return null;
    return userLike[0];
  }
}
