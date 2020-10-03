import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxCardsComponent } from './ui-ux-cards.component';

describe('UiUxCardsComponent', () => {
  let component: UiUxCardsComponent;
  let fixture: ComponentFixture<UiUxCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiUxCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUxCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
