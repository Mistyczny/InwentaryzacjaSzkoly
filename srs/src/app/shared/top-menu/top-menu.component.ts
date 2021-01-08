import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { TopMenuService } from './top-menu.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit, AfterViewInit {
  height: number;

  constructor(private topMenuService: TopMenuService) { }
 
  onResized(event: ResizedEvent) {
    this.height = event.newHeight;
    this.topMenuService.heightChanged(this.height);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() : void {
    
  }

}
