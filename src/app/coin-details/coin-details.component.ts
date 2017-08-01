import { Coins } from '../model/coins';
import { CoinsService } from '../service/coins.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})

export class CoinDetailsComponent implements OnInit {

  coins: Coins[];

  constructor(private route: ActivatedRoute, private coinsService: CoinsService) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.coinsService.getCoin(params['id']))
      .subscribe(coin => { this.coins = coin; console.log(coin); } );
  }

  /*
  ngOnInit() {

       this.route.params
       .map(params => params['id'])
       .subscribe((id) => {
         this.coinsService.getCoin(id)
         .subscribe(coin => {
           this.coins = coin; console.log('coin:' + this.coins);
         });
      });
    }
    */
}
