import { TopListComponent } from './../top-list/top-list.component';
import { AboutComponent } from './../about/about.component';
import { CoinDetailsComponent } from './../coin-details/coin-details.component';
import { CoinsComponent } from './../coins/coins.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: CoinsComponent },
  { path: 'selected/:id', component: CoinDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'toplist', component: TopListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  declarations: [],
  exports: [RouterModule],
})
export class RoutingModule { }
