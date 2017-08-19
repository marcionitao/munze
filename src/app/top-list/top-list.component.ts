import { CoinsService } from './../service/coins.service';
import { Coins } from './../model/coins';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {

  coins: Coins[];

  constructor(private coinsService: CoinsService, private router: Router) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
   this.coinsService.getCoins()
   .subscribe(coin => {this.coins = coin; console.log(coin) });
  }

  coinDetails(id: string): void {
    this.router.navigate(['/selected', id]);
  }

}
