import { hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import { LoginUserPayload } from "@/common/interfaces";
import UserService from "./users.service";
import { isObjectEmpty } from "@/common/utils";
import BASE_CONST from "@/common/constants";

export default class AuthService {
  async userLogin(data: LoginUserPayload): Promise<string> {
    let user = null;
    try {
      user = await new UserService().getUserByEmail(data.email);
    } catch (error) {
      console.error(error);
      throw new Error(BASE_CONST.ERROR.INTERNAL_SERVER);
    }
    if (!user || isObjectEmpty(user)) {
      throw new Error(BASE_CONST.ERROR.USER_NOT_FOUND);
    }

    const hashedPassword = hashSync(data.password, user.salt);
    if (hashedPassword !== user.encrypted_password) {
      console.log();
      throw new Error(BASE_CONST.ERROR.INVALID_CRED);
    }

    const privateKey = process.env.PRIVATE_KEY as string;
    const token = sign({ data: user.id }, privateKey, {
      expiresIn: "24h",
    });
    return token;
  }
}
