import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards.component';
import { AddCardComponent } from './add-card.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: 'card-game-app/index.html/about',
    component: AboutComponent
  },
  {
    path: 'card-game-app/index.html/add-card',
    component: AddCardComponent
  },
  {
    path: 'card-game-app/index.html',
    component: CardsComponent
  },
  {
    path: '**',
    redirectTo: '/card-game-app/index.html'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
