import { Component, OnInit } from '@angular/core';
import { ChacactersService } from './chacacters.service';
import { StorageServiceService } from '../shared/storage-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  search = '';
  showFiller = false;
  allCharacters: Array<any>;
  allCharactersFiltered: Array<any>;
  oderBy: string;

  

  constructor(private service: ChacactersService,  private favoritesService: StorageServiceService) { }

  ngOnInit(): void {

    //if(!this.storage.getItem('favorites')) {
    //  this.storage.setItem('favorites', new Set())
    //}

    this.service.getAllCharacters().subscribe(res=>{
      this.allCharacters = res;
      this.allCharactersFiltered = res;
      console.log(res)})

      //console.log('str', this.storage)

  }

  setFavorite(id){
    //this.storage.setItem('favorites', {})
  }

  searchCharacters(){
    this.service.getAllCharactersByName(this.search, this.oderBy).subscribe(res=>{
      console.log('oi', res)
      this.allCharactersFiltered = res;
    })
  }

  filter(){
    console.log('jonas', this.search);
    this.allCharactersFiltered = this.allCharacters.
    filter(elem=> elem.name.toUpperCase().indexOf(this.search.toUpperCase())!==-1)
  }

  showOnlyFavorites() {
    this.allCharactersFiltered = this.favoritesService.getFavorites();
  }

}
