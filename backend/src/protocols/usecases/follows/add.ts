export interface IAddFollowUsecase {
  execute: (userId: string, followingId: string) => Promise<void>;
}
