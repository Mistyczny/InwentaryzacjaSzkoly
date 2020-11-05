import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardService } from '../../services';
import {
  SupportRequestData
} from '../../models';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  public supportRequestData$: Observable<SupportRequestData[]>;

  constructor(private service: DashboardService) {
    this.supportRequestData$ = this.service.loadSupportRequestData();
  }
}
