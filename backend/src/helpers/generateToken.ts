import jwt from "jsonwebtoken";
import { IGenerateToken } from "../protocols/helpers/generateToken";

export class GenerateToken implements IGenerateToken {
  secret = "secret";
  generate(userId: string) {
    const token = jwt.sign(userId, this.secret);
    return token;
  }
}
