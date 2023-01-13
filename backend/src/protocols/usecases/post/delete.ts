export interface IDeletePostUsecase {
  execute: (data: data) => Promise<void>;
}

export type data = {
  postId: string;
  userId: string;
};
