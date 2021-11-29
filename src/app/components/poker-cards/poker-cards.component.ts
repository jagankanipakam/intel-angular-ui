import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { ItemList } from 'src/app/models/itemlist';
import { PokerCardsService } from 'src/app/services/poker-cards.service';

@Component({
  selector: 'app-poker-cards',
  templateUrl: './poker-cards.component.html',
  styleUrls: ['./poker-cards.component.css'],
  providers: [PokerCardsService],
})
export class PokerCardsComponent implements OnInit {
  itemList: ItemList[] = [];
  selectedItems: ItemList[] = [];
  dropdownSettings = {
    singleSelection: false,
    text: 'Select Cards',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    searchPlaceholderText: 'Search Card',
    enableSearchFilter: true,
    // badgeShowLimit: 10,
    groupBy: 'category',
  };
  sortedCards: Card[] = [];
  sortBtnDisable = false;
  minCardLength = false;
  serverError = '';
  constructor(private _pokerCardsService: PokerCardsService) {}

  ngOnInit() {
    this.generateCards();
  }

  sortCards() {
    this.resetButtonFlags();
    if (this.selectedItems.length > 1) {
      this.sortBtnDisable = true;
      let reqBody = this.selectedItems.map((item) => item.itemName);
      this._pokerCardsService.sortPokerCards(reqBody).subscribe(
        (res) => {
          this.sortedCards = res;
        },
        (err) => {
          this.sortedCards = [];
          this.serverError = 'Internal Server Error';
          this.sortBtnDisable = false;
        },
        () => {
          this.sortBtnDisable = false;
        }
      );
    } else {
      this.minCardLength = true;
    }
  }
  resetButtonFlags() {
    this.minCardLength = false;
    this.sortBtnDisable = false;
    this.serverError = '';
  }
  generateCards() {
    let count = 0;
    Object.keys(Suit).forEach((suite) => {
      for (const val of Object.values(Values)) {
        let item = {
          id: count + 1,
          itemName: `${val}${suite}`,
          category:
            suite == 'd'
              ? 'Diamonds'
              : suite == 's'
              ? 'Spades'
              : suite == 'c'
              ? 'Clubs'
              : 'Hearts',
          suite,
        };
        this.itemList.push(item);
        count++;
      }
    });
  }
}
enum Suit {
  c = 'c',
  d = 'd',
  h = 'h',
  s = 's',
}
enum Values {
  ace = 'A',
  two = '2',
  three = '3',
  four = '4',
  five = '5',
  six = '6',
  seven = '7',
  eight = '8',
  nine = '9',
  ten = '10',
  jack = 'J',
  queen = 'Q',
  king = 'K',
}
