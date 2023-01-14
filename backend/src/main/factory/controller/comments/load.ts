import { LoadPostComments } from "../../../../controllers/comments/load";
import { makeLoadPostCommentsUsecase } from "../../usecase/comments/load";

export function makeLoadPostCommentsController(){
    const laodCommentsUsecase = makeLoadPostCommentsUsecase()
    return new LoadPostComments(laodCommentsUsecase)
}