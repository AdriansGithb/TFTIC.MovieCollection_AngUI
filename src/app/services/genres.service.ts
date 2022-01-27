import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private $http: HttpClient) { }

  getAll(): Observable<Genre[]> {
    return this.$http.get<Genre[]>(`https://localhost:44375/api/genre`);
  }

  addNewGenre(newGenreLabel: string) {
    return this.$http.post(`https://localhost:44375/api/genre`, { 'Label': newGenreLabel } );
  }

  deleteGenre(id : number){
    return this.$http.delete(`https://localhost:44375/api/genre/${id}`);
  }

  updateGenre(genre : Genre){
    return this.$http.put(`https://localhost:44375/api/genre`, { 'IdGenre' : genre.idGenre, 'NewLabel' : genre.label} );
  }
}
