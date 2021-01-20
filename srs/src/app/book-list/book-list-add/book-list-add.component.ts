import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookListService } from '../book-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import {root} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-book-list-add',
  templateUrl: './book-list-add.component.html',
  styleUrls: ['./book-list-add.component.css']
})
export class BookListAddComponent implements OnInit {
  model = new Book(0, '', '', '');
  submitted = false;

  constructor(private bookListService: BookListService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
  }

  onSubmitBook(): void {
    this.submitted = true;
    this.bookListService.postBook(this.model).toPromise().then((data: any) => {
      console.log('Book added');
      if (data.status === true) {
          console.log('Book added');
          this.router.navigate(['/dashboard/books'], {relativeTo: root});
      }
    });
  }
}
