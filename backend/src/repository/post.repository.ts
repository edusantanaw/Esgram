import { client, post } from "../prisma/client";

type IPostCreate = {
  authorId: string;
  content?: string;
  image?: string;
};

type IPost = {
  authorId: string;
  content?: string;
  image?: string;
  id: string;
};

export class PostRepository {
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

  async getFeed(userId: string, limit: number, start: number) {
    const posts: string[] = await client.$queryRaw`
    select "authorId", name,  posts.id, "perfilPhoto", image, content  from posts
    inner join "Follows" on  "Follows"."followerId" = posts."authorId"
    inner join users on users.id  = posts."authorId"
    where "Follows"."followingId" = ${userId} OR posts."authorId" = ${userId} OR "followerId" = ${userId}
    order by posts."createdAt" desc
    Limit ${limit} offset ${start};`;
    if (posts.length === 0) return null;
    return posts;
  }

  async userPost(userId: string, limit: number, start: number) {
    const posts: [] = await client.$queryRaw`
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
