export default class User {
  readonly id: string;
  readonly name: string;
  readonly managerId: string;

  constructor(id: string, name: string, managerId: string) {
    this.id = id;
    this.name = name;
    this.managerId = managerId;
  }
}
