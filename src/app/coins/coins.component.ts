
import { Coins } from './../model/coins';
import { CoinsService } from './../service/coins.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins: Coins[] = [];
  coinsV3: any;

  constructor(private coinsService: CoinsService, private router: Router) { }

  ngOnInit() {

    this.show();
  }

  show() {
    this.coinsService.getCoinsV3().subscribe(

      data => {
        this.coinsV3 = [];
        Object.keys(data)
        .map(
          (key) => {
            this.coinsV3.push(data[key]);
          }
        );
      }
    )
  }

  // getCoins() {
  //   this.coinsService.getCoins().subscribe(

  //     data => {
  //       this.coins = [];
  //       Object.keys(data)
  //       .map(
  //         (key) => {
  //           this.coins.push(data[key])
  //         }
  //       );
  //       // To order by Rank
  //       this.coins.sort( (a, b) => a.rank - b.rank) ;
  //     }
  //   );
  // }

}
