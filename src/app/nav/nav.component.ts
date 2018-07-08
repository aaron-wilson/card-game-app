import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="tabs">
      <a routerLink="/cards" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/add-card" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Add Card</a>
      <a routerLink="/about" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">About</a>
    </nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { ngOnInit() { } }
