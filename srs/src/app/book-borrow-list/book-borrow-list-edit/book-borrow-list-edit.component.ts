import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {root} from 'rxjs/internal-compatibility';
import { BookBorrowListService } from '../book-borrow-list.service';
import { BookBorrow } from '../book-borrow.model';

@Component({
  selector: 'app-book-borrow-list-edit',
  templateUrl: './book-borrow-list-edit.component.html',
  styleUrls: ['./book-borrow-list-edit.component.css']
})
export class BookBorrowListEditComponent implements OnInit {
    model = new BookBorrow('', '', 0, new Date(), new Date());
    id: string;
    submitted = false;

    constructor(private bookBorrowListService: BookBorrowListService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {
        console.log('INIT')
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id)
            console.log("in edit")
            this.bookBorrowListService.getBookBorrowByID(this.model.id).toPromise().then((data: any) => {
                if(data.status === true) {
                    console.log(data.data)
                    this.model = new BookBorrow(data.data[0]._id, data.data[0].borrowerID, data.data[0].bookID, 
                                                new Date(data.data[0].borrowDate), new Date(data.data[0].exprectedReturnDate));
                }
            });
        });
    }

    onSubmitBookBorrowEdit(): void {
        this.submitted = true;
        this.bookBorrowListService.updateBookBorrow(this.model).toPromise().then((data: any) => {
            if (data.status === true) {
                this.router.navigate(['dashboard' ,'bookBorrows']);
            }
        });
    }
}
