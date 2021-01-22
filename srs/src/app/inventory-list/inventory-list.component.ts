import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryListService } from './inventory-list.service';
import { InventoryItem } from './inventory.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
    inventory: InventoryItem[] = [];

    constructor(private inventoryListService: InventoryListService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {
        this.reloadInventory();
    }

    reloadInventory(): void {
        this.inventory = [];
        this.inventoryListService.getAllInventoryItems().subscribe((data: any) => {
            if (data.status === true) {
                data.data.forEach(element => {
                this.inventory.push(new InventoryItem(element._id, element.name, element.price, 
                                    element.serialNumber, element.purchaseDate, element.description));
                });
            }
        });
    }

    removeInventoryItem(id: string): void {
        this.inventoryListService.deleteInventoryItem(id).subscribe((data: any) => {
           if(data.status === true) {
                this.reloadInventory();
           } 
        });
    }

    goAddInventoryItemPage(): void {
        this.router.navigate(['dashboard' ,'addInventory']);
    }
}