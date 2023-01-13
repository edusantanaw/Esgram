export interface IEncrypter {
    genHash: (password: string) => Promise<string>;
    compare: (password: string, hashPassword: string) => Promise<boolean>;
  }