import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

import { trigger, transition, animate, style , state } from '@angular/animations'


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [ trigger('slideState', [
    state('current', style({
      transform: 'translateX(0%)',
      zIndex: 1
    })),
    state('next', style({
      transform: 'translateX(100%)',
      zIndex: 1
    })),
    state('previous', style({
      transform: 'translateX(-100%)',
      zIndex: 1
    })),,
  transition('current => previous', animate('400ms ease-out')),
  transition('next => current', animate('400ms ease-out')),])]

})
export class WorksComponent implements OnInit {


  counter =0;
  

  @ViewChild('widgetContent', { read: ElementRef}) public widgetContent: ElementRef<any>;



  selectedTab : number =0;
  faChevronCircleLeft = faChevronLeft;
  faChevronCircleRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
    
  }


  onPrev(){

    if(this.counter >0){
    this.counter -- 
    this.selectedTab --;



    }
  }

  onNext(){
    if(this.counter < 4){
       this.counter++;
       this.selectedTab ++;

      }

  }

  

  activeTabs(value){

  

 switch(value){

  case 0:
    this.selectedTab =0;
    this.counter=0;
    break;

  case 1:
    this.selectedTab =1;
    this.counter=1;
    break;

  case 2:
    this.selectedTab =2;
    this.counter=2;
    break;

  case 3:
    this.selectedTab =3;
    this.counter=3;
    break;
    
  case 4:
    this.selectedTab =4;
    this.counter=4;
    break;
    

 }
}


}