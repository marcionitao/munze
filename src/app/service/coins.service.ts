import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Coins } from 'app/model/coins';

@Injectable()
export class CoinsService {

  urlDetails = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
  idCoin: any;
  url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10'
  currency = 'USD'
  api = 'fe02f253babe9c83eb2dd82ab68da663401db4fa3270ae1ea85c1c4b93b21aa2';

  constructor(private http: HttpClient) { }

  getCoinsV3(): Observable<Coins[]> {

    return timer(0,5000).pipe(
      mergeMap(() =>  this.http.get<Coins[]>(this.url+'&tsym='+this.currency+'&api_key='+this.api)
        .pipe(
          map(res =>  {return res['Data']})
        )
      )
    )
  }

  getCoin(id: any) {

    this.idCoin = id;
    const url = this.urlDetails + id + '&tsyms=' + this.currency + '&api_key='+this.api;
    return this.http.get(url)
  }

  getCurrency(currency:any) {

    const url = this.urlDetails + this.idCoin + '&tsyms=' + currency + '&api_key='+this.api;
    return this.http.get(url)
  }

}
