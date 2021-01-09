import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Coins } from 'app/model/coins';
import { environment } from '../../environments/environment';

@Injectable()
export class CoinsService {

  urlDetails = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
  api: string  = environment.api;
  url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10'
  idCoin: any;
  currency = 'USD'

  constructor(private http: HttpClient) { }

  getCoins(): Observable<Coins[]> {

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
