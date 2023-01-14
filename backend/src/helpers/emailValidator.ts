import { IValidator } from "../protocols/helpers/validator";
import validator from "validator";

export class EmailValidator implements IValidator {
  isValid(email: string): boolean {
    const valid = validator.isEmail(email);
    return valid;
  }
}
