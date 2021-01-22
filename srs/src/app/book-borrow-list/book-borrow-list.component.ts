import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookBorrowListService } from './book-borrow-list.service';
import { BookBorrow } from './book-borrow.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-book-borrow-list',
  templateUrl: './book-borrow-list.component.html',
  styleUrls: ['./book-borrow-list.component.css']
})
export class BookBorrowListComponent implements OnInit {
    borrowedBooks: BookBorrow[] = [];

    constructor(private bookBorrowListService: BookBorrowListService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {
        this.reloadBookBorrows();
    }

    reloadBookBorrows(): void {
        this.borrowedBooks = [];
        this.bookBorrowListService.getBorrowedBooks().subscribe((data: any) => {
            if (data.status === true) {
                data.data.forEach(element => {
                    this.borrowedBooks.push(new BookBorrow(element._id, element.borrowerID, element.bookID, element.borrowDate, element.exprectedReturnDate));
                });
            }
        });
    }

    removeBookBorrow(id: string): void {
        this.bookBorrowListService.deleteBookBorrow(id).subscribe((data: any) => {
            if(data.status === true) {
                 this.reloadBookBorrows();
            }
        });
    }

    goAddBookBorrowPage(): void {
        this.router.navigate(['dashboard' ,'addBookBorrow']);
    }
}
