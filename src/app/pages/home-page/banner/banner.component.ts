import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
  }

  public onClick(elementId: string):void {
    
    // this.viewportScroller.scrollToAnchor(elementId);

    let el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: "smooth"})

  }

}
