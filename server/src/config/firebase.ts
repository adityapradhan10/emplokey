import admin, { ServiceAccount } from "firebase-admin";
// TODO: Find a way to handle this service account key file in production
import cred from "@/serviceAccountKey.json";

const firebase = admin.initializeApp({
  credential: admin.credential.cert(cred as string | ServiceAccount),
});

export const db = firebase.firestore();
