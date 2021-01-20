import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inwentaz } from './inwentaz.model';

@Injectable()
export class InwentazListService {
  constructor(private http: HttpClient) {}

  getInwentaz(): Observable<object> {
    return this.http.get('http://localhost:3000/inwentaz');
  }

  deleteInwentaz(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/inwentaz/' + id);
  }

  postInwentaz(inwentaz: Inwentaz): Observable<object> {
    return this.http.post('http://localhost:3000/books/', inwentaz);
  }
}
