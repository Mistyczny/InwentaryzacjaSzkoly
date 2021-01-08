import { AfterViewInit, ElementRef, EventEmitter, Injectable, OnInit, ViewChild } from '@angular/core';

@Injectable()
export class TopMenuService implements OnInit, AfterViewInit {
    changeHeightEvent: EventEmitter<number> = new EventEmitter<number>(); 
    height: number;
    @ViewChild('topMenuBar') topMenuBarRef: ElementRef;

    ngOnInit() : void {
    }

    ngAfterViewInit() : void {
        this.height = this.topMenuBarRef.nativeElement.height;
        this.changeHeightEvent.emit(this.height);
        console.log("Height changed!");
    }

    heightChanged(newHeight: number) : void {
        this.height = newHeight;
        this.changeHeightEvent.emit(this.height);
        console.log("Height changed!");
    }
}