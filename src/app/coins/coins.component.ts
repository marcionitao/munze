import { CoinsService } from './../service/coins.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent implements OnInit  {

  coins: any;

  constructor(private service: CoinsService) {}

  ngOnInit() {
    this.show();
  }

  show() {
    this.service.getCoins().subscribe(

      (data) => {
        this.coins = [];
        Object.keys(data)
        .map(
          (key) => {
            this.coins.push(data[key]);
          }
        );
      }

    );
  }

}
