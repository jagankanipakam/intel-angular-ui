import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { SortCardResponse } from '../models/sortcardsresponse';

@Injectable()
export class PokerCardsService {
  constructor(private http: HttpClient) {}
  sortPokerCards(body: string[]) {
    return this.http
      .post<SortCardResponse>(
        `${environment.apiUrl}/pokercards/sortcards`,
        body
      )
      .pipe(
        map((apiRes) => {
          return apiRes.response.map((item) => {
            return {
              suite: item.slice(-1),
              value: item.slice(0, -1),
            } as Card;
          });
        })
      );
  }
}
