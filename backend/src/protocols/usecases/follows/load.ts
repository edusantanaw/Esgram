import { Follows } from "@prisma/client"


export interface ILoadFollowsUsecase {
    loadFollowers: (userId: string) => Promise<Follows[] | null>
    loadFollowings: (userId: string) => Promise<Follows[] | null>
}