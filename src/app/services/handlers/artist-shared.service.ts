import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Artist } from 'src/app/models/artist.model';
import { __values } from 'tslib';
import { ArtistsService } from '../artists.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistSharedService {
  private slctdArtist = new BehaviorSubject<Artist | null>(null);
  currentSlctdArtist = this.slctdArtist.asObservable();

  private artistsList = new BehaviorSubject<Artist[]>([]);
  currentArtistsList = this.artistsList.asObservable();

  constructor(private artServ : ArtistsService) {
    this.loadArtistsList();
  }

   loadArtistsList() : void {
     this.artServ.getAll().subscribe({
       next : (artists) => {
         if(artists)
         this.artistsList.next(artists);
        else this.artistsList.next([])}
      });
  }

  addArtistToUpdate(idArtist : number){
    let artist = this.artistsList.value.find(artist => artist.idArtist == idArtist);
    if(artist) {
    this.slctdArtist.next(artist);
  }
  }

  deleteArtistToUpdate(){
    this.slctdArtist.next(null);
  }

  updateArtist(artForm : FormGroup) {
    let artistName = artForm.value['name'] + ' ' + artForm.value['firstName'];
    this.artServ.updateArtist(artForm).subscribe({
      next : () => {
        this.deleteArtistToUpdate();
        alert(`Artiste ${artistName} modifié`);
      }, 
      error : (e) => {
        console.error(e);
      }, 
      complete : () => {this.loadArtistsList();},
     });
  }

  addNewArtist(artForm : FormGroup){
    let artistName = artForm.value['name'] + ' ' + artForm.value['firstName'];
    this.artServ.addNewArtist(artForm).subscribe({
      next: () => {
        alert(`Artiste ${artistName} enregistré`);
      },
      error: (e) => console.error(e),
      complete : () => {this.loadArtistsList();},
    });
  }

  deleteArtist(id : number){
    this.artServ.deleteArtist(id).subscribe({
      next : () => {
        alert(`Artiste ${id} supprimé`);
      },
      error : (e) => console.error(e),
      complete: () => {this.loadArtistsList();},
    });
    }

}
