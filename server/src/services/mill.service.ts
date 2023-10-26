import BASE_CONST from "@/common/constants";
import { RegisterMillPayload } from "@/common/interfaces";
import { simplyClassObject } from "@/common/utils";
import { db } from "@/config/firebase";
import Mill from "@/models/Mill";
import { CollectionReference, DocumentData } from "firebase-admin/firestore";
import { v4 as uuidv4 } from "uuid";

export default class MillService {
  private ref: CollectionReference<DocumentData>;

  constructor() {
    this.ref = db.collection(BASE_CONST.DB_COLLECTIONS.MILL);
  }

  async createMill(data: RegisterMillPayload): Promise<string> {
    try {
      const mill = new Mill(uuidv4(), data.name, data.managerId);
      await this.ref.doc(mill.id).set(simplyClassObject(mill));
      return mill.id;
    } catch (error) {
      console.error(error);
      throw new Error(BASE_CONST.ERROR.INTERNAL_SERVER);
    }
  }
}
