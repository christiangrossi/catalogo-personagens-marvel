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

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}&orderBy=name&limit=40&nameStartsWith=spider`)
    .pipe(map((data: any) => data.data.results))
  }


  getAllCharactersByName(name: string, orderBy: string): Observable<any> {
    console.log('orderBy', orderBy)
    return this.http.get<any>(`${this.URL_API}&orderBy=${orderBy}&limit=40&nameStartsWith=${name}`)
    .pipe(map((data: any) => data.data.results))
  }

}
