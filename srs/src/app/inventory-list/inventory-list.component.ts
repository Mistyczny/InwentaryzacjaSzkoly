import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { InventoryListService } from './inventory-list.service';


@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  users: User[] = [];

  constructor(private inventoryListService: InventoryListService) { }

  ngOnInit(): void {
      this.reloadInventory();
  }

  reloadInventory(): void {
    this.users = [];
  }

  removeInventoryItem(id: number): void {
  }
}
