import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about">
      <p>This game is meant to be played with another popular card game. Follow the rules for the original game, and when you're bored of their cards, use this app to create some new ones. Click on a random card to reveal the text.
    </section>
  `,
  styles: ['#about p { max-width: 80%; margin: 0 auto; }']
})
export class AboutComponent implements OnInit { ngOnInit() { } }
