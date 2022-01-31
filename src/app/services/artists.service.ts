import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  constructor(private $http: HttpClient) { }

  getAll(): Observable<Artist[]> {
    return this.$http.get<Artist[]>(`https://localhost:44375/api/artist`);
  }

  addNewArtist(newArtistForm: FormGroup) {
    let {idArtist, ...newArtist}= newArtistForm.value;
    return this.$http.post(`https://localhost:44375/api/artist`, newArtist);
  }

  deleteArtist(id: number) {
    return this.$http.delete(`https://localhost:44375/api/artist/${id}`);
  }

 updateArtist(artistForm: FormGroup) {
  let {idArtist, ...artist}= artistForm.value;
   return this.$http.put(`https://localhost:44375/api/artist/${idArtist}`, artist);
 }
}
