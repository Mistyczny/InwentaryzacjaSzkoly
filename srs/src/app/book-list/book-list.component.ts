import { Component, OnInit } from '@angular/core';
import { BookListService } from './book-list.service';
import {Book} from './book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    books: Book[] = [];

    constructor(private booksListService: BookListService) { }

    ngOnInit(): void {
      this.reloadBooks();
    }

    reloadBooks(): void {
      this.books = [];
      this.booksListService.getBooks().subscribe((data: any) => {
        console.log(data);
        if (data.status === true) {
          data.data.forEach(element => {
            this.books.push(new Book(element.bookID, element.title, element.author, element.description));
          });
        }
      });
    }

    removeBook(bookId: number): void {
      this.booksListService.deleteBook(bookId).subscribe((data: any) => {
        console.log(data);
        if (data.status === true) {
          this.reloadBooks();
        }
      });
    }
}
