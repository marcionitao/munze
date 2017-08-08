import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CoinsService {

  // private headers = new Headers({ 'Content-Type': 'application/json' });

  urlBase = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
  urlDetails = 'https://api.coinmarketcap.com/v1/ticker';
  idCoin: any;

  constructor(private http: Http) { }
/*
  getCoins() {
    return this.http.get(this.urlBase)
    .map(response => response.json())
    .catch(this.handleError);
  }
*/

/* It will do GET request in server API location in 5000 mileseconds.
So we will have our data updated in real time */
  getCoins() {
  return Observable
    .timer(0, 5000)
    .flatMap(() =>  this.http.get(this.urlBase))
    .map(res => res.json())
    .catch(this.handleError);
  }

  getCoin(id: string) {

    this.idCoin = id;
    const url = this.urlDetails + '/' + id + '/';
    return this.http.get(url + '/')
    .map(response => response.json())
    .catch(this.handleError);
  }

  getCurrency(currency) {
    const url = this.urlDetails + '/' + this.idCoin + '/?convert=' + currency;
    return this.http.get(url)
    .map(response => response.json())
    .catch(this.handleError);
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
