import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevCardsComponent } from './web-dev-cards.component';

describe('WebDevCardsComponent', () => {
  let component: WebDevCardsComponent;
  let fixture: ComponentFixture<WebDevCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
