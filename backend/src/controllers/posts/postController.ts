import { post, like, client, comments } from "../../prisma/client";
import { Request, Response } from "express";
import { Token } from "../../provider/accessToken";

const tokenPorvider = new Token();
export class PostController {
  async addLike(req: Request, res: Response) {
    const postId = req.params.post;
    const userToken = await tokenPorvider.getUserByToken(req);

    try {
      if (!postId) throw "Post invalid!";
      if (!userToken) throw "User not found!";

      const findPost = await post.findFirst({
        where: {
          id: postId,
        },
        select: {
          Like: true,
          id: true,
        },
      });
      if (!findPost) throw "Post not found";
      if (!findPost.id) throw "Post not found!";

      const verifyLike: [] = await client.$queryRaw`
          select * from likes
          where "userId" = ${userToken.id}
          AND "postId" = ${postId}
      `;
      if (verifyLike.length > 0) {
        await like.deleteMany({
          where: {
            postId: postId,
            userId: userToken.id,
          },
        });
      } else {
        await like.create({
          data: {
            userId: userToken.id,
            postId: findPost.id,
          },
        });
      }
      res.status(200).json("success");
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async getAllPosts(req: Request, res: Response) {
    const posts = await post.findMany();
    if (!posts) return res.status(400).json({ error: "Post not found!" });
    res.status(200).json(posts);
  }

  async getUsersPostLike(req: Request, res: Response) {
    const id = req.params.id;
    const userLike = await like.findMany({
      where: {
        postId: id,
      },
    });
    if (!userLike) return res.status(400).json({ error: "Users not found!" });

    res.status(200).json(userLike);
  }

  async addComment(req: Request, res: Response) {
    const id = req.params.id;
    const { comment } = req.body;

    const userToken = await tokenPorvider.getUserByToken(req);
    if (!userToken) return res.status(400).json({ error: "User not found!" });
    try {
      if (!id) throw "User not found!";
      if (!comment) throw "Comment invalid!";
      const findPost = await post.findFirst({
        where: {
          id: id,
        },
      });
      if (!findPost) throw "Post not find";

      const newComment = await comments.create({
        data: {
          content: comment,
          authorId: userToken?.id,
          postId: findPost.id,
        },
      });
      res.status(200).json(newComment);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async getPostComments(req: Request, res: Response) {
    const id = req.params.id;

    try {
      if (!id) res.status(400).json({ error: "Id invalid!" });
      const postComments: string[] = await client.$queryRaw`
      select  comments.content, comments.id , name, users.id as user, users."perfilPhoto" from comments 
      inner join users on users.id = comments."authorId"
      where comments."postId"= ${id}
    `;
      if (postComments.length === 0) throw "This post not have comments!";
      res.status(200).json(postComments);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}
