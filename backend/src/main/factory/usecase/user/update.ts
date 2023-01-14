import { UserRepository } from "../../../../repository/user.repository";
import { UpdateUseusecase } from "../../../../usecases/user/update";


export function makeUpdateUsecase(){
    const userRepository = new UserRepository()
    return new UpdateUseusecase(userRepository)
}