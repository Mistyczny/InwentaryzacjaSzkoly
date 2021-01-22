import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookBorrowListComponent } from '../book-borrow-list.component';
import { BookBorrow } from '../book-borrow.model';

@Component({
  selector: 'app-book-borrow-list-item',
  templateUrl: './book-borrow-list-item.component.html',
  styleUrls: ['./book-borrow-list-item.component.css']
})
export class BookBorrowListItemComponent implements OnInit {
    @Input() borrowedBook: BookBorrow;
  
    constructor(private bookBorrowListComponent: BookBorrowListComponent,
                private route: ActivatedRoute,
                private router: Router) {}
      
    ngOnInit(): void {}

    onRemoveBookBorrow(): void {
        this.bookBorrowListComponent.removeBookBorrow(this.borrowedBook.id);
    }

    goEditBookBorrowPage(): void {
        this.router.navigate(['dashboard' ,'editBookBorrow', this.borrowedBook.id]);
    }
}