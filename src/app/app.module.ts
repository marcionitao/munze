import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';
import { CoinsService } from './service/coins.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { AboutComponent } from './about/about.component';
import { TopListComponent } from './top-list/top-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinDetailsComponent,
    AboutComponent,
    TopListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RoutingModule,
  ],
  providers: [CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
