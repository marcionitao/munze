
import {switchMap} from 'rxjs/operators';
import { Coins } from '../model/coins';
import { CoinsService } from '../service/coins.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';


@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})

export class CoinDetailsComponent implements OnInit {

  selectValue = 'USD';
  currency: any = ['USD', 'AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'INR', 'JPY', 'KRW', 'MXN', 'RUB'];
  coins: Coins[] = [];

  idCoin: any;
  coinsV3: any;
  objData : object [];
  objREW : object [];

  objCoin : string []; // use HTML page

  constructor(private route: ActivatedRoute, private coinsService: CoinsService) { }

  ngOnInit(): void {

    this.idCoin = this.route.snapshot.paramMap.get("id");
     // convert param(BTC, ETH...) to String
    let param: string = this.idCoin;

    this.route.params.pipe(
      switchMap((params: Params) => this.coinsService.getCoin(params['id']) ))
      .subscribe(

        data => {
          this.objData = data as object [];  // FILL THE ARRAY WITH DATA.
          this.objREW = data["RAW"] ;
          this.objCoin = this.objREW[param]; // param "BTC, ETH..."

          // convert object into Array
          let arr = Array.from(Object.keys(this.objCoin), k => this.objCoin[k]);

          this.coinsV3 = arr;
          console.log(this.coinsV3);
        }

        // this converte to json object to array
        // data => {

        //   this.coinsV3 = [];
        //   Object.keys(data)
        //     .map(
        //       (key) => {
        //         this.coinsV3.push(data[key]); console.log(this.coinsV3)
        //       }
        //     )
        //   // item removed of array
        //   this.coinsV3.splice(1);
        // }

      )
  }

  onChange(item) {
    console.log(item);
    this.selectValue = item;
    // convert param(BTC, ETH...) to String
    let param: string = this.idCoin;
    // get convert value coin
    this.coinsService.getCurrency(item)
      .subscribe(

        // this converte to json object to array
        data => {

          this.objData = data as object [];  // FILL THE ARRAY WITH DATA.
          this.objREW = data["RAW"] ;
          this.objCoin = this.objREW[param]; // param "BTC, ETH..."

          // convert object into Array
          let arr = Array.from(Object.keys(this.objCoin), k => this.objCoin[k]);

          this.coinsV3 = arr;
          console.log(this.coinsV3);

          // this.coinsV3 = [];
          // Object.keys(data)
          //   .map(
          //     (key) => {
          //       this.coinsV3.push(data[key])
          //     }

          //   );
          // // item removed of array
          // this.coinsV3.splice(1);
        }
      );
  }

}
