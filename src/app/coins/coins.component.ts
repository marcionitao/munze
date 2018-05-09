import { async } from '@angular/core/testing';
import { Coins } from './../model/coins';
import { CoinsService } from './../service/coins.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins: Coins[];
  // selectedCoin: Coins;

  constructor(private coinsService: CoinsService, private router: Router) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this.coinsService.getCoins().subscribe(
      data => {
        this.coins = data;
        // console.log(data);
      });
  }

  coinDetails(id: string): void {
    this.router.navigate(['/selected', id]);
  }

}
