export class User {
    id: string;
    login: string;
    password: string;
    firstName:string;
    lastName:string;
    creationDate: Date;
    token?:string;

    constructor(id: string, login: string, firstName: string, lastName: string, creationDate: Date) {
        this.id = id;
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.creationDate = creationDate;
    }
}