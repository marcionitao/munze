import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { interval, timer, Observable } from 'rxjs';
import { map, catchError, mergeMap, flatMap, switchMap } from 'rxjs/operators';

import { Coins } from './../model/coins';

@Injectable()
export class CoinsService {

  // private headers = new Headers({ 'Content-Type': 'application/json' });

  urlBase_v1 = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
  urlBase_v2 = 'https://api.coinmarketcap.com/v2/ticker/?limit=10';
  urlDetails = 'https://api.coinmarketcap.com/v2/ticker';
  idCoin: any;

  constructor(private http: HttpClient) { }
/*
  getCoins() {
    return this.http.get(this.urlBase)
    .map(response => response.json())
    .catch(this.handleError);
  }
*/

/* It will do GET request in server API location in 5000 mileseconds.
So we will have our data updated in real time */
  
// Public API V2 CoinMarketCap
  getCoins(): any {
  
    return timer(0,5000).pipe(
      flatMap(() =>  this.http.get(this.urlBase_v2)
        .pipe( 
          map(res => res['data'])
        )
      )
    )
    
  }

  getCoin(id: any) {

    this.idCoin = id;
    const url = this.urlDetails + '/' + id + '/';
   
    return this.http.get(url)
    .pipe(
      map(res => res),
      catchError(this.handleError)
    )
  }

  getCurrency(currency) {
    const url = this.urlDetails + '/' + this.idCoin + '/?convert=' + currency;
   
    return this.http.get(url)
    .pipe(
      map(res => res),
      catchError(this.handleError)
    )
  }

  // method of test
  getCoinCurrency(coin) {
    console.log('Coin: ' + coin + ' Currency: ' + this.idCoin);
  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
