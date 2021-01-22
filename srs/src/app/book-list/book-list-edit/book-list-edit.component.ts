import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookListService } from '../book-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import {root} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-book-list-edit',
  templateUrl: './book-list-edit.component.html',
  styleUrls: ['./book-list-edit.component.css']
})
export class BookListEditComponent implements OnInit {
  model = new Book(0, '', '', '');
  id: number;

  submitted = false;

  constructor(private bookListService: BookListService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
          this.id = params['id'];
          this.bookListService.getBook(this.id).toPromise().then((data: any) => {
              console.log(data.data.title)
              if(data.status === true) {
                  this.model = new Book(data.data.bookID, data.data.title, data.data.author, data.data.description);
              }
          });
      });
  }

  onSubmitBook(): void {
    this.submitted = true;
    this.bookListService.updateBook(this.model).toPromise().then((data: any) => {
        console.log('Book edited');
        if (data.status === true) {
            this.router.navigate(['dashboard' ,'books']);
        }
    });
  }
}
