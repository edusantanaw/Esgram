import bcrypt from "bcrypt";

export class Encrypter {
  rounds = 10;
  async genHash(password: string) {
    const salt = await bcrypt.genSalt(this.rounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  async compare(password: string, hash: string) {
    const isEquals = await bcrypt.compare(password, hash);
    console.log(await this.genHash(password), "hash:" + hash);
    return isEquals;
  }
}
