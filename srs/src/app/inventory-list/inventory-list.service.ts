import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from './inventory.model';

@Injectable()
export class InventoryListService {
  constructor(private http: HttpClient) {}

    getInventory(): Observable<object> {
      return this.http.get('http://localhost:3000/inventory');
    }

    deleteInventoryItem(id: number): Observable<void> {
      return this.http.delete<void>('http://localhost:3000/inventory/' + id);
    }

    postInventoryItem(inventoryItem: InventoryItem): Observable<object> {
      return this.http.post('http://localhost:3000/inventory/', inventoryItem);
    }
}
