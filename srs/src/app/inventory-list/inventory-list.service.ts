import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from './inventory.model';

@Injectable()
export class InventoryListService {
    constructor(private http: HttpClient) {}

    putInventoryItem(inventoryItem: InventoryItem): Observable<object> {
        return this.http.put('http://localhost:3000/inventory', inventoryItem);
    }

    getAllInventoryItems(): Observable<object> {
        return this.http.get('http://localhost:3000/inventory');
    }

    getInventoryItem(id: string): Observable<object> {
        return this.http.get('http://localhost:3000/inventory/' + id);
    }

    deleteInventoryItem(id: string): Observable<void> {
        return this.http.delete<void>('http://localhost:3000/inventory/' + id);
    }

    updateInventoryItem(inventoryItem: InventoryItem): Observable<object> {
        return this.http.post('http://localhost:3000/inventory/' + inventoryItem.id, inventoryItem);
    }
}