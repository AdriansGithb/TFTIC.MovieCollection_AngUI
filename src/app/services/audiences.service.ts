import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audience } from '../models/audience.model';

@Injectable({
  providedIn: 'root'
})
export class AudiencesService {
  constructor(private $http: HttpClient) { }

  getAll(): Observable<Audience[]> {
    return this.$http.get<Audience[]>(`https://localhost:44375/api/audience`);
  }

  addNewAudience(newAudienceLabel: string) {
    return this.$http.post(`https://localhost:44375/api/audience`, { 'Label': newAudienceLabel } );
  }

  deleteAudience(id : number){
    return this.$http.delete(`https://localhost:44375/api/audience/${id}`);
  }

  updateAudience(audience : Audience){
    return this.$http.put(`https://localhost:44375/api/audience`, { 'IdAudience' : audience.idAudience, 'NewLabel' : audience.label} );
  }
}
