import { Encrypter } from "../../../../helpers/encrypter";
import { UserRepository } from "../../../../repository/user.repository";
import { UpdateUserPasswordUsecase } from "../../../../usecases/user/updatePassword";


export function makeUpdatePasswordUsecase(){
    const userRepository = new UserRepository();
    const encrypter = new Encrypter();
    return new UpdateUserPasswordUsecase(userRepository, encrypter)
}