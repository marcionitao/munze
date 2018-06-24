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
      .subscribe(
        /*coin => {
        this.coins = coin; console.log(coin)
        }*/

        // this converte to json object to array
        data => {
          this.coins = [];
          Object.keys(data)
          .map(
            (key) => { 
              this.coins.push(data[key])
            }
          ); 
          // To order by Rank
          console.log( );  
          this.coins.sort( (a, b) => a.rank - b.rank) ;  
        }
      );
  }

}
