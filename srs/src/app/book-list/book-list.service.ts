import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BookListService {
  constructor(private http: HttpClient) {}

    getBooks(): Observable<object> {
        return this.http.get('http://localhost:3000/books');
    }

    deleteBook(id: number): Observable<object> {
        console.log('Remove book by service: ' + id);
        const body = JSON.stringify({ bookID: 'id'});
      // tslint:disable-next-line:max-line-length
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set('access-control-allow-origin', 'http://localhost:3000/');
        const options = { headers, body };
        return this.http.delete('http://localhost:3000/books');
    }

    onClickDelete(id: number): void {
        this.deleteBook(1).subscribe(() => console.log('user deleted'));
    }
}
