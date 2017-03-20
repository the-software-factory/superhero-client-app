
export class User {

  firstName: string;

  lastName: string;

  username: string;

  roles: string[];

  getDisplayName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
