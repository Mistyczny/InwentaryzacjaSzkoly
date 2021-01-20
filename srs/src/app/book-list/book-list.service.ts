import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable()
export class BookListService {
  constructor(private http: HttpClient) {}

    getBooks(): Observable<object> {
        return this.http.get('http://localhost:3000/books');
    }

    deleteBook(id: number): Observable<void> {
        return this.http.delete<void>('http://localhost:3000/books/' + id);
    }

    postBook(book: Book): Observable<object> {
        return this.http.post('http://localhost:3000/books/', book);
    }
}
