export class User {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
    creationDate: Date;
    token?: string;

    constructor(login: string, firstName: string, lastName: string, creationDate: Date) {
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.creationDate = creationDate;
    }
}
