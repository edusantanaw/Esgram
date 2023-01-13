import { Like } from "@prisma/client";
import { client, like } from "../prisma/client";
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

  async loadPostLike(postId: string) {
    const userLikes: Like[] = await client.$queryRaw`
        select * from likes
        inner join clients on clients.id = likes.userId
        where postId = ${postId}
      `;
    if (userLikes.length === 0) return null;
    return userLikes;
  }
}
