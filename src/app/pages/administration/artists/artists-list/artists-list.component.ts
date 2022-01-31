import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ArtistSharedService } from 'src/app/services/handlers/artist-shared.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss'],
})
export class ArtistsListComponent implements OnInit {
  artistsList: Artist[] = [];

  constructor(private sharedServ : ArtistSharedService ) {
  }

  ngOnInit(): void {
    this.sharedServ.currentArtistsList.subscribe(
      artistsList => this.artistsList = artistsList
    );
  }
  
  onUpdateAction(idArtist : number){
      this.sharedServ.addArtistToUpdate(idArtist);
  }

  onDeleteAction(id : number){
    this.sharedServ.deleteArtist(id);
    }

}
