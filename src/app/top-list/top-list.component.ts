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
            this.coinsV3.push(data[key]); console.log(this.coinsV3)
          }
        );
      }
    )
  }

  // getCoins() {
  //   this.coinsService.getCoins()
  //     .subscribe(
  //       // this converte to json object to array
  //       data => {
  //         this.coins = [];
  //         Object.keys(data)
  //         .map(
  //           (key) => {
  //             this.coins.push(data[key])
  //           }
  //         );
  //         // To order by Rank
  //         console.log( );
  //         this.coins.sort( (a, b) => a.rank - b.rank) ;
  //       }
  //     );
  // }

}
