import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TopMenuService } from '../top-menu/top-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebarHeaderElement') sidebarHeaderElementRef : ElementRef;

  constructor(private topMenuService: TopMenuService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() : void {
    this.sidebarHeaderElementRef.nativeElement.height = this.topMenuService.height;
    this.topMenuService.changeHeightEvent.subscribe(
      (height: number) => {
        console.log("Height subscribe!");
        this.sidebarHeaderElementRef.nativeElement.height = height;
      }
    );
  }

}
