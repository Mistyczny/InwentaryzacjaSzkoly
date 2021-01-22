import { Component, Input, OnInit } from '@angular/core';
import { InventoryListComponent } from '../inventory-list.component';
import { InventoryItem } from '../inventory.model';

@Component({
  selector: 'app-inventory-list-item',
  templateUrl: './inventory-list-item.component.html',
  styleUrls: ['./inventory-list-item.component.css']
})
export class InventoryListItemComponent implements OnInit {
  @Input() inventoryItem: InventoryItem;
  
  constructor(private inventoryListComponent: InventoryListComponent) {
  }

  ngOnInit(): void {}

  onRemoveInventoryItem(): void {
      this.inventoryListComponent.removeInventoryItem(this.inventoryItem.id);
  }
}