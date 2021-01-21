import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookListComponent } from '../book-list.component';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book: Book;

  constructor(private bookListComponent: BookListComponent) {
  }

  ngOnInit(): void {
  }

  onEditBook(): void {
    console.log('Edit this book: ' + this.book.title);
  }

  onRemoveBook(): void {
    console.log('Remove this book: ' + this.book.title);
    this.bookListComponent.removeBook(this.book.bookID);
  }
}
