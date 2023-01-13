import { Component, OnInit } from '@angular/core';
import { ChacactersService } from './chacacters.service';
import { StorageFavoritesService } from '../shared/storage-favorites.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  search = '';
  allCharacters: Array<any>;
  allCharactersFiltered: Array<any>;
  oderBy: string = 'name';

  
  constructor(private service: ChacactersService,  private favoritesService: StorageFavoritesService) { }

  ngOnInit(): void {
    this.searchCharacters();
  }

  searchCharacters(){
    this.service.getAllCharactersByName(this.search, this.oderBy).subscribe(res=>{

      this.allCharactersFiltered = res;
      const favorites: Array<any> = this.favoritesService.getFavorites();

      if(this.favoritesService.getFavorites()) {
        const tempArr = new Array();
        favorites.forEach(character=> tempArr.push(character));
        this.allCharactersFiltered = this.allCharactersFiltered.filter(character => 
            !favorites.find(elem=> elem.id === character.id)
        );
        this.allCharactersFiltered.forEach(character =>tempArr.push(character));
        this.allCharactersFiltered = tempArr;
      }
    });
  }

  filter(){
    this.allCharactersFiltered = this.allCharacters.
    filter(elem=> elem.name.toUpperCase().indexOf(this.search.toUpperCase())!==-1);
  }

  showOnlyFavorites() {
    this.allCharactersFiltered = this.favoritesService.getFavorites();
  }

}
