import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookBorrow } from './book-borrow.model';

@Injectable()
export class BookBorrowListService {
    constructor(private http: HttpClient) {}

    getBorrowedBooks(): Observable<object> {
        return this.http.get('http://localhost:3000/bookBorrow');
    }

    deleteBookBorrow(id: string): Observable<void> {
        return this.http.delete<void>('http://localhost:3000/bookBorrow/' + id);
    }

    addBookBorrow(bookBorrow: BookBorrow) {
        return this.http.put('http://localhost:3000/bookBorrow', bookBorrow);
    }

    getBookBorrowByID(id: string): Observable<object> {
        return this.http.get('http://localhost:3000/bookBorrow/' + id);
    }

    updateBookBorrow(bookBorrow: BookBorrow): Observable<object> {
        return this.http.post('http://localhost:3000/bookBorrow/' + bookBorrow.id, bookBorrow);
    }
}
