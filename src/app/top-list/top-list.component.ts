import { CoinsService } from './../service/coins.service';
import { Coins } from './../model/coins';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {

  coins: Coins[];

  constructor(private coinsService: CoinsService) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
   this.coinsService.getCoins()
   .subscribe(coin => {this.coins = coin; console.log(coin) });
  }

}
