import { Follows } from "@prisma/client";
import { client, follows } from "../prisma/client";
import { IFollowsRepository } from "../protocols/repository/follows";

export class FollowsRepository implements IFollowsRepository {
  async add(followerId: string, followingId: string) {
    await follows.create({
      data: {
        followerId,
        followingId,
      },
    });
    return;
  }

  async loadFollowers(userId: string) {
    const followers: Follows[] = await client.$queryRaw`
    select name, users.id, "perfilPhoto" from "Follows"
    inner join users on users.id = "Follows"."followerId"
    where "Follows"."followingId" = ${userId};`;

    if (followers.length === 0) return null;
    return followers;
  }

  async loadFollowing(userId: string) {
    const followings: Follows[] = await client.$queryRaw`
    select name, users.id, "perfilPhoto" from "Follows"
    inner join users on users.id = "Follows"."followingId"
    where "Follows"."followerId" = ${userId};`;
    if (followings.length === 0) return null;
    return followings;
  }
}
