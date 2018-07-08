import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="my-card" (click)="isHidden=!isHidden">
      <h4 [style.visibility]="isHidden ? 'hidden' : 'visible'">
        <ng-content></ng-content>
      </h4>
      <h6>CardGameApp</h6>
    </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {
  isHidden: boolean = true;
  ngOnInit() { }
}
