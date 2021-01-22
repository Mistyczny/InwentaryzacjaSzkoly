import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {root} from 'rxjs/internal-compatibility';
import { InventoryListService } from '../inventory-list.service';
import { InventoryItem } from '../inventory.model';

@Component({
  selector: 'app-inventory-list-add',
  templateUrl: './inventory-list-add.component.html',
  styleUrls: ['./inventory-list-add.component.css']
})
export class InventoryListAddComponent implements OnInit {
    model = new InventoryItem('', '', 0, '', new Date(), '');
    submitted = false;

    constructor(private inventoryListService: InventoryListService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {}

    onSubmitBook(): void {
        this.submitted = true;
        this.inventoryListService.putInventoryItem(this.model).toPromise().then((data: any) => {
            if (data.status === true) {
                this.router.navigate(['dashboard' ,'books']);
            }
        });
    }
}
