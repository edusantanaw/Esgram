import { Follows } from "@prisma/client";

export interface IFollowsRepository {
    add: (followerId: string, followingId: string) => Promise<void>;
    loadFollowers: (userId: string) => Promise<Follows[] | null>;
    loadFollowing: (userId: string) => Promise<Follows[] | null>;
  }