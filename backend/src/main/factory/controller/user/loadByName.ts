import { LoadUserByNameController } from "../../../../controllers/user/loadByName";
import { makeLoadUserUsecase } from "../../usecase/user/load";


export function makeLoadUserByNameController(){
    const loadUserUsecas = makeLoadUserUsecase();
    return new LoadUserByNameController(loadUserUsecas)
}