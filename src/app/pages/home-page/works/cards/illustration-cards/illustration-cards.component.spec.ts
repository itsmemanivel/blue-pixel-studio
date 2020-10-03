import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationCardsComponent } from './illustration-cards.component';

describe('IllustrationCardsComponent', () => {
  let component: IllustrationCardsComponent;
  let fixture: ComponentFixture<IllustrationCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustrationCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
