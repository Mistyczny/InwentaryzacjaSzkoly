import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartService } from '../shared/chart.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Registered users' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  count: number = 0;
  chartDate: Date[] = [];

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.getUserCount().subscribe((data: any) => {
      this.count = data.count;
    });

    this.chartService.getUserRegistrationChartData().subscribe((data: any) => {
      this.chartDate = data.data.creationDate;
    });
  }

}
