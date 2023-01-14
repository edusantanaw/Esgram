import { AddNewComment } from "../../../../controllers/comments/add";
import { makeAddCommentUsecase } from "../../usecase/comments/add";

export function makeAddCommentController() {
  const addNewCommentUsecase = makeAddCommentUsecase();
  return new AddNewComment(addNewCommentUsecase);
}
