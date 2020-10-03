import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  faTimes=faTimes;
  constructor(private viewportScroller: ViewportScroller) {}
  
  public onClick(elementId: string):void {
    
    // this.viewportScroller.scrollToAnchor(elementId);

    let el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: "smooth"})

  }
  openSidebar(){


  }
}


