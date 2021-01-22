export class BookBorrow {
    id: string;
    borrowerID: string;
    bookID: number;
    borrowDate: Date;
    exprectedReturnDate: Date;

    constructor(id: string, borrowerID: string, bookID: number,borrowDate: Date, exprectedReturnDate: Date) {
        this.id = id;
        this.borrowerID = borrowerID;
        this.bookID = bookID;
        this.borrowDate = borrowDate;
        this.exprectedReturnDate = exprectedReturnDate;
    }
}