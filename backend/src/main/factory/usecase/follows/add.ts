import { ChatRepository } from '../../../../repository/chat.repository'
import { FollowsRepository } from '../../../../repository/follower.repository'
import { UserRepository } from '../../../../repository/user.repository'
import {AddFollowUsecase} from '../../../../usecases/follows/add'

export function makeAddFollowUsecase(){
    const userRepository = new UserRepository()
    const followRepository = new FollowsRepository()
    const chatRepository = new ChatRepository()
    return new AddFollowUsecase(followRepository, userRepository, chatRepository)
}