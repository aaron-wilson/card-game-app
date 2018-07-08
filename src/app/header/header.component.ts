import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>CardGameApp</h1>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { ngOnInit() { } }
