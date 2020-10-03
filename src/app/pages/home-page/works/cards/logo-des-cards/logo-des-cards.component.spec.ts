import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDesCardsComponent } from './logo-des-cards.component';

describe('LogoDesCardsComponent', () => {
  let component: LogoDesCardsComponent;
  let fixture: ComponentFixture<LogoDesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
