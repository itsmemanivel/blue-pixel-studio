import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesCardsComponent } from './graphic-des-cards.component';

describe('GraphicDesCardsComponent', () => {
  let component: GraphicDesCardsComponent;
  let fixture: ComponentFixture<GraphicDesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
