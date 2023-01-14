import { LoadRoomController } from "../../../../controllers/chat/loadRoom";
import { makeLoadChatUsecase } from "../../usecase/chat/load";


export function makeLoadRoomController(){
    const LoadChatUsecase = makeLoadChatUsecase();
    return new LoadRoomController(LoadChatUsecase)
}