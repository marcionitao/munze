import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';
import { CoinsService } from './service/coins.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { TimeAgoPipe } from 'time-ago-pipe';
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
    TopListComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
