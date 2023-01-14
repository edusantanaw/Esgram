export interface IUpdateUserPasswordUsecase {
  execute: (data: { id: string; password: string }) => Promise<void>;
}
