import { Coins } from '../model/coins';
import { CoinsService } from '../service/coins.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})

export class CoinDetailsComponent implements OnInit {

  selectValue = 'USD';
  currency: any = ['USD', 'AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'INR', 'JPY', 'KRW', 'MXN', 'RUB'];
  coins: Coins[] = [];

  constructor(private route: ActivatedRoute, private coinsService: CoinsService) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.coinsService.getCoin(params['id']))
      .subscribe(
        // this converte to json object to array
        data => {
          this.coins = [];
          Object.keys(data)
            .map(
              (key) => {
                this.coins.push(data[key])
              }

            );
          // item removed of array
          this.coins.splice(1);

        })
  }

  onChange(item) {
    console.log(item);
    this.selectValue = item;
    // get convert value coin
    this.coinsService.getCurrency(item)
      .subscribe(

        // this converte to json object to array
        data => {
          this.coins = [];
          Object.keys(data)
            .map(
              (key) => {
                this.coins.push(data[key])
              }

            );
          // item removed of array
          this.coins.splice(1);
        }
      );
  }

}
