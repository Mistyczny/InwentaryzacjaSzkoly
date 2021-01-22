import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {root} from 'rxjs/internal-compatibility';
import { InventoryListService } from '../inventory-list.service';
import { InventoryItem } from '../inventory.model';

@Component({
  selector: 'app-inventory-list-edit',
  templateUrl: './inventory-list-edit.component.html',
  styleUrls: ['./inventory-list-edit.component.css']
})
export class InventoryListEditComponent implements OnInit {
    model = new InventoryItem('', '', 0, '', new Date(), '');
    id: string;
    submitted = false;

    constructor(private inventoryListService: InventoryListService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id)
            this.inventoryListService.getInventoryItem(this.model.id).toPromise().then((data: any) => {
                if(data.status === true) {
                    console.log(data.data)
                    this.model = new InventoryItem(data.data[0]._id, data.data[0].name, data.data[0].price, 
                                data.data[0].serialNumber, new Date(data.data[0].purchaseDate), data.data[0].description);
                }
            });
        });
    }

    onSubmitInventoryItem(): void {
        this.submitted = true;
        this.inventoryListService.updateInventoryItem(this.model).toPromise().then((data: any) => {
            if (data.status === true) {
                this.router.navigate(['dashboard' ,'inventory']);
            }
        });
    }
}
