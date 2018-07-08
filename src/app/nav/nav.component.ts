import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="tabs">
      <a routerLink="card-game-app/index.html" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="card-game-app/index.html/add-card" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" skipLocationChange>Add Card</a>
      <a routerLink="card-game-app/index.html/about" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" skipLocationChange>About</a>
    </nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { ngOnInit() { } }
