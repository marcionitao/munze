
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

  constructor(private coinsService: CoinsService, private router: Router) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this.coinsService.getCoins().subscribe(

      data => {
        this.coins = [];
        Object.keys(data)
        .map(
          (key) => { 
            this.coins.push(data[key])
          }
        ); 
        // To order by Rank
        this.coins.sort( (a, b) => a.rank - b.rank) ;  
      }
    );
  }

}
