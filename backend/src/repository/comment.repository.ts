import { client, comments } from "../prisma/client";

type iComment = {
  authorId: string;
  content: string;
  postId: string;
};

export class CommentRepository {
  async newComment(data: iComment) {
    const comment = await comments.create({
      data,
    });
    return comment;
  }

  async comments(id: string) {
    const postComments: string[] = await client.$queryRaw`
          select  comments.content, comments.id , name, users.id as user, users."perfilPhoto" from comments 
          inner join users on users.id = comments."authorId"
          where comments."postId"= ${id}
        `;
    return postComments;
  }
}
