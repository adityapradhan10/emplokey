import Person from "./Person";

export default class User extends Person {
  readonly encrypted_password: string;
  readonly salt: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    encrypted_password: string,
    salt: string
  ) {
    super(id, firstName, lastName, email);
    this.encrypted_password = encrypted_password;
    this.salt = salt;
  }
}
