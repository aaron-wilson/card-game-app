import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
import { Card } from './card/card.type';

const JSON = require('./cards.json');

@Component({
  selector: 'app-cards',
  template: `
    <section id="cards" class="my-cards">
      <app-card *ngFor="let card of cards">{{card.question}}</app-card>
      <div class="flex-dummy"></div>
      <div class="flex-dummy"></div>
      <div class="flex-dummy"></div>
      <div class="flex-dummy"></div>
      <div class="flex-dummy"></div>
      <div class="flex-dummy"></div>
      <div class="flex-dummy"></div>
      <div class="flex-dummy"></div>
      <div class="flex-dummy"></div>
      <div class="flex-dummy"></div>
    </section>
  `,
  styles: []
})
export class CardsComponent implements OnInit {
  cards: any;

  constructor(private cardSvc: CardService) { }

  shuffleSome(arr) {
    let dec = 2;
    if (arr.length > 50) dec = 4;
    else if (arr.length > 100) dec = 8;
    else if (arr.length > 1000) dec = 16;

    let i = 0
    let j = 0
    let temp = null

    for (i = arr.length - 1; i > 0; i -= dec) {
      console.log('i', i ,'j', j);
      j = Math.floor(Math.random() * (i + 1))
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }

  ngOnInit() {
    this.cardSvc.getCards()
      .subscribe(
        (cards: any) => {
          if (cards) {
            this.shuffleSome(cards);
            this.cards = cards.slice(0, 20);
          } else {
            let arr = JSON.cards;
            this.shuffleSome(arr);
            this.cards = arr;
          }
        },
        err => {
          console.error(err);
          let arr = JSON.cards;
          this.shuffleSome(arr);
          this.cards = arr;
        },
        () => { console.log('GET /cards complete'); }
      );
  }

}

function shuffle(arr) {
  let i = 0
  let j = 0
  let temp = null

  for (i = arr.length - 1; i > 0; i -= 1) {
    // console.log('i', i ,'j', j);
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
