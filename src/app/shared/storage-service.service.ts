import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  favoritos: Array<any> = new Array();
  constructor() {}

  setItem(character: any){

    if(localStorage.getItem('favorites')) {
      character.favorite = true;
      this.favoritos = this.getFavorites()
      if(this.favoritos.length < 5 ) {
        this.favoritos.push(character)
        localStorage.setItem('favorites', JSON.stringify(this.favoritos));
      } else {
        alert('Sua lista de favoritos está cheia')
      }
    } else {
      console.log('vazio')
      character.favorite = true;
      this.favoritos.push(character);
      localStorage.setItem('favorites',JSON.stringify(this.favoritos));
    }
  }

  getFavorites(){
    if(localStorage.getItem('favorites')) {
      return JSON.parse(localStorage.getItem('favorites'))
    }
  }

  clearFavorites(){
    localStorage.removeItem('favorites')
  }

  removeFromFavorites(character){
    this.favoritos = this.getFavorites();
    this.favoritos = this.favoritos.filter(elem=>elem.id !== character.id);
    localStorage.setItem('favorites', JSON.stringify(this.favoritos));
  }

}
