import { TestBed } from '@angular/core/testing';

import { PokerCardsService } from './poker-cards.service';

describe('PokerCardsService', () => {
  let service: PokerCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokerCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
