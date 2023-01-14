export type User = {
  name: string;
  email: string;
  password: string;
};

export interface UserCreate extends User {
  confirmPassword: string;
}
