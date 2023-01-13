import { iComment } from "../../repository/comment";

export interface IAddNewCommentUsecase {
  execute: (data: iComment) => Promise<iComment>;
}
