import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookListComponent } from '../book-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book: Book;

  constructor(private bookListComponent: BookListComponent,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
  }

  onRemoveBook(): void {
    this.bookListComponent.removeBook(this.book.bookID);
  }

  goEditBookPage(): void {
    this.router.navigate(['dashboard' ,'editBook', this.book.bookID]);
  }
}
