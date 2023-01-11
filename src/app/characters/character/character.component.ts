import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageServiceService } from 'src/app/shared/storage-service.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input()
  character: any;

  @Output() favoriteRemoved = new EventEmitter();
  
  constructor(private favoritesService: StorageServiceService) { }

  ngOnInit(): void {
  }


  addToFavorites() {
    this.favoritesService.setItem(this.character);
  }

  removeFromFavorites() {
    this.favoritesService.removeFromFavorites(this.character);
    this.favoriteRemoved.emit();
  }

}
