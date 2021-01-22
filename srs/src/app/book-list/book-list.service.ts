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

    getBook(id: number): Observable<object> {
        return this.http.get('http://localhost:3000/books/' + id);
    }

    deleteBook(id: number): Observable<void> {
        return this.http.delete<void>('http://localhost:3000/books/' + id);
    }

    putBook(book: Book): Observable<object> {
        return this.http.put('http://localhost:3000/books/', book);
    }

    updateBook(book: Book): Observable<object> {
        return this.http.post('http://localhost:3000/books/' + book.bookID, book);
    }
}
