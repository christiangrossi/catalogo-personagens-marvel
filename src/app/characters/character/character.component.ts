import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageFavoritesService } from 'src/app/shared/storage-favorites.service';
import {MatDialog } from '@angular/material/dialog';
import { CharacterDetailComponent } from '../character-detail-modal/character-detail.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input()
  character: any;

  @Output() favoriteRemoved = new EventEmitter();
  @Output() modifiedFavorites = new EventEmitter();
  
  constructor(private favoritesService: StorageFavoritesService, public dialog: MatDialog) { }
  favoritesSize = 0;


  ngOnInit(): void {
    this.favoritesSize = this.favoritesService.getSize();
  }


  addToFavorites() {
    this.favoritesService.setItem(this.character);
    this.favoritesSize = this.favoritesService.getSize();
    this.modifiedFavorites.emit();
  }

  removeFromFavorites() {
    this.favoritesService.removeFromFavorites(this.character);
    this.favoritesSize = this.favoritesService.getSize();
    this.modifiedFavorites.emit();
  }

  openCharacterDetails() {
    this.dialog.open(CharacterDetailComponent,
      {
        data: this.character,
        width: '50%',
        maxWidth: '1250px',
        minHeight: '200px',
      })
  }

}
