import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerCardsComponent } from './poker-cards.component';

describe('PokerCardsComponent', () => {
  let component: PokerCardsComponent;
  let fixture: ComponentFixture<PokerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
