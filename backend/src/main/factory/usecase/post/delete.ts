import { PostRepository } from "../../../../repository/post.repository";
import { UserRepository } from "../../../../repository/user.repository";
import { DeletePostUsecase } from "../../../../usecases/post/delete";


export function makeDeletePostUsecase(){
    const postRepository = new PostRepository()
    const userRepository = new UserRepository()   
    return new DeletePostUsecase(userRepository, postRepository)
}