import { client, comments } from "../prisma/client";
import { iComment, ICommentRepository } from "../protocols/repository/comment";

export class CommentRepository implements ICommentRepository {
  async create(data: iComment) {
    const comment = await comments.create({
      data,
    });
    return comment;
  }

  async load(id: string) {
    const postComments: iComment[] = await client.$queryRaw`
          select  comments.content, comments.id ,
          name, users.id as user, users."perfilPhoto" from comments 
          inner join users on users.id = comments."authorId"
          where comments."postId"= ${id}`;
    if (postComments.length === 0) return null;
    return postComments;
  }
}
