import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  @Input() book: Book;

  ngOnInit(): void {
  }

  onEditBook(): void {
      console.log('Edit this book: ' + this.book.title);
  }

  onRemoveBook(): void {
    console.log('Remove this book: ' + this.book.title);
  }
}
