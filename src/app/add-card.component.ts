import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from './card/card.type';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-add-card',
  template: `
    <section id="add-card">
      <div class="form-group">
        <form
          name="add-card"
          (ngSubmit)="handleSubmit(addCardForm)"
          #addCardForm="ngForm">
          <fieldset ngModelGroup="card">
            <input
              class="form-control"
              [(ngModel)]="question"
              type="text"
              name="question"
              placeholder="..."
              required
              maxlength="255">
          </fieldset>
          <div class="my-btn-wrapper">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div class="my-cards my-card-preview">
        <div class="my-card">
          <h4>{{ question }}</h4>
          <h6>Card Game App</h6>
        </div>
      </div>
    </section>
  `,
  styles: [
    '.my-btn-wrapper { text-align: center; margin: 1em 0; }',
    '.my-card-preview { margin-top: 1.5em; }'
   ]
})
export class AddCardComponent implements OnInit {
  // these are public instance variables
  // as opposed to class variables (static card: Card)
  // public because private was not specified
  card: Card;
  question: string;

  constructor(
    private cardService: CardService,
    private router: Router) { }

  handleSubmit(form: NgForm) {
    this.card = form.value.card;

    if (!this.card.question) {
      console.error('No question entered');
      return;
    }

    this.cardService.addCard(this.card)
      .subscribe(
        card => console.log('Card saved:', card),
        err => {
          console.error(err);
          this.router.navigateByUrl('/card-game-app/index.html', { skipLocationChange: true});
        },
        () => { this.router.navigateByUrl('/card-game-app/index.html', { skipLocationChange: true}); }
      );
  }

  ngOnInit() { }
}
