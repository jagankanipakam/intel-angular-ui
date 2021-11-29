import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokerCardsComponent } from './components/poker-cards/poker-cards.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'poker-cards',
    pathMatch: 'full',
  },
  {
    path: 'poker-cards',
    component: PokerCardsComponent,
  },
  {
    path: '**',
    redirectTo: 'poker-cards',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
