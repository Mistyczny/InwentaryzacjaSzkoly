import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {root} from 'rxjs/internal-compatibility';
import { BookBorrowListService } from '../book-borrow-list.service';
import { BookBorrow } from '../book-borrow.model';

@Component({
  selector: 'app-book-borrow-list-add',
  templateUrl: './book-borrow-list-add.component.html',
  styleUrls: ['./book-borrow-list-add.component.css']
})
export class BookBorrowListAddComponent implements OnInit {
    model = new BookBorrow('', '', 0, new Date(), new Date());
    submitted = false;

    constructor(private bookBorrowListService: BookBorrowListService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {}

    onSubmitBookBorrow(): void {
        this.submitted = true;
        this.bookBorrowListService.addBookBorrow(this.model).toPromise().then((data: any) => {
            if (data.status === true) {
                this.router.navigate(['dashboard' ,'bookBorrows']);
            }
        });
    }
}
