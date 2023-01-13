import { client, post } from "../prisma/client";
import { dataPaginate } from "../protocols/global/dataPaginate";
import {
  IPost,
  IPostCreate,
  IPostRepository,
} from "../protocols/repository/post";

export class PostRepository implements IPostRepository {
  async create(data: IPostCreate) {
    const newPost = await post.create({
      data: data,
    });
    return newPost;
  }

  async findById(id: string) {
    const postReponse = await post.findFirst({ where: { id } });
    return postReponse;
  }

  async update(data: IPost) {
    const updatedPost = await post.update({
      where: { id: data.id },
      data: data,
    });
    return updatedPost;
  }

  async delete(id: string) {
    await post.delete({ where: { id } });
    return;
  }
  async loadAll() {
    const posts = await post.findMany();
    return posts;
  }

  async getFeed(data: dataPaginate) {
    const { userId, limit, start } = data;
    const posts: IPost[] = await client.$queryRaw`
    select "authorId", name,  posts.id, "perfilPhoto", image, content  from posts
    inner join "Follows" on  "Follows"."followerId" = posts."authorId"
    inner join users on users.id  = posts."authorId"
    where "Follows"."followingId" = ${userId} OR posts."authorId" = ${userId} OR "followerId" = ${userId}
    order by posts."createdAt" desc
    Limit ${limit} offset ${start};`;
    if (posts.length === 0) return null;
    return posts;
  }

  async userPost(data: dataPaginate) {
    const { userId, limit, start } = data;
    const posts: IPost[] = await client.$queryRaw`
    select users.name, users.id, users."perfilPhoto", posts.id, posts.content, posts.image 
    from posts 
    inner join users on users.id = posts."authorId"
    where users.id = ${userId}
    order by posts."createdAt" desc
    Limit ${limit} offset ${start};`;
    if (posts.length === 0) return null;
    return posts;
  }
}
