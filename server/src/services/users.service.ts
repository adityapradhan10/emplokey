import BASE_CONST from "@/common/constants";
import { RegisterUserPayload } from "@/common/interfaces";
import { isObjectEmpty, simplyClassObject } from "@/common/utils";
import { db } from "@/config/firebase";
import User from "@/models/User";
import { genSaltSync, hashSync } from "bcrypt";
import { CollectionReference, DocumentData } from "firebase-admin/firestore";
import { v4 as uuidv4 } from "uuid";

export default class UserService {
  private ref: CollectionReference<DocumentData>;

  constructor() {
    this.ref = db.collection(BASE_CONST.DB_COLLECTIONS.USERS);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const snapshot = await this.ref.where("email", "==", email).get();
      if (snapshot.empty) {
        return null;
      }
      let user = null;
      snapshot.forEach((doc) => (user = doc.data()));
      return user;
    } catch (error) {
      console.error(error);
      throw new Error(BASE_CONST.ERROR.INTERNAL_SERVER);
    }
  }

  async createUser(data: RegisterUserPayload): Promise<string> {
    const existingUser = await this.getUserByEmail(data.email);
    if (!isObjectEmpty(existingUser)) {
      throw new Error(BASE_CONST.ERROR.USER_EXISTS);
    }

    try {
      const salt = genSaltSync(10);
      const encrypted_password = hashSync(data.password, salt);
      const user = new User(
        uuidv4(),
        data.firstName,
        data.lastName,
        data.email,
        encrypted_password,
        salt
      );
      await this.ref.doc(user.id).set(simplyClassObject(user));
      return user.id;
    } catch (error) {
      console.error(error);
      throw new Error(BASE_CONST.ERROR.INTERNAL_SERVER);
    }
  }
}
