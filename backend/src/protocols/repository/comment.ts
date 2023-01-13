import { Comments } from "@prisma/client";

export type iComment = {
  authorId: string;
  content: string;
  postId: string;
};

export interface ICommentRepository {
  create: (data: iComment) => Promise<Comments>;
  load: (id: string) => Promise<iComment[] | null>;
}
