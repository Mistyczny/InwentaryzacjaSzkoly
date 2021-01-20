export class Book {
    bookID: number;
    title: string;
    author: string;
    description: string;

    constructor(bookID: number, title: string, author: string, description: string) {
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.description = description;
    }
}
