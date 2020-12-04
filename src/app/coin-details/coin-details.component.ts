
import {switchMap} from 'rxjs/operators';
import { CoinsService } from '../service/coins.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})

export class CoinDetailsComponent implements OnInit {

  selectValue = 'USD';
  currency: any = ['USD', 'AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'INR', 'JPY', 'KRW', 'MXN', 'RUB'];

  idCoin: any;
  coins: any;
  objData : object [];
  objREW : object [];

  objCoin : string []; // use HTML page

  constructor(private route: ActivatedRoute, private service: CoinsService) { }

  ngOnInit(): void {

    this.idCoin = this.route.snapshot.paramMap.get("id");
     // convert param(BTC, ETH...) to String
    let param: string = this.idCoin;

    this.route.params.pipe(
      switchMap((params: Params) => this.service.getCoin(params['id']) )
    ).subscribe(

      data => {
        this.objData = data as object [];  // FILL THE ARRAY WITH DATA.
        this.objREW = data["RAW"] ;
        this.objCoin = this.objREW[param]; // param "BTC, ETH..."
        // convert object into Array
        let arr = Array.from(Object.keys(this.objCoin), k => this.objCoin[k]);

        this.coins = arr;
      }
    )
  }

  onChange(item:any) {
    console.log(item);
    this.selectValue = item;
    // convert param(BTC, ETH...) to String
    let param: string = this.idCoin;
    // get convert value coin
    this.service.getCurrency(item).subscribe(

      // this converte to json object to array
      data => {

        this.objData = data as object [];  // FILL THE ARRAY WITH DATA.
        this.objREW = data["RAW"] ;
        this.objCoin = this.objREW[param]; // param "BTC, ETH..."
        // convert object into Array
        let arr = Array.from(Object.keys(this.objCoin), k => this.objCoin[k]);

        this.coins = arr;
      }
    );
  }
}
