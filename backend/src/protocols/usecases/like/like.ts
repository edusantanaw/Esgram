export type data = {
  userId: string;
  postId: string;
};

export interface ILikeUsecase {
  add: (data: data) => Promise<void>;
  remove: (data: data) => Promise<void>;
}
