import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChacactersService {

  URL_API = `https://gateway.marvel.com:443/v1/public/characters?&apikey=ed5accb8c7697714ac1dbf1c7584c3c0`;

  constructor(private http: HttpClient) { }

  getAllCharactersByName(nameStartsWith: string, orderBy: string): Observable<any> {
    let params = new URLSearchParams();
    let object = {
      nameStartsWith,
      orderBy
    }

    for(let key in object){
      if(object[key]){
        params.set(key, object[key]);
      }
    }

    return this.http.get<any>(`${this.URL_API}&${params.toString()}&limit=100`)
    .pipe(map((data: any) => data.data.results));
  }

}
