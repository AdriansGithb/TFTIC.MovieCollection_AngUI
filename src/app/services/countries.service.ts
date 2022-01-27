import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private $http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.$http.get<Country[]>(`https://localhost:44375/api/country`, {
      observe: 'body',
      responseType: 'json',
      // headers : new HttpHeaders({
      //   'Content-Type':  'application/json',
      //   Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkB0ZXN0LmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiVXNlcklkIjoiODFjODhiMGUtNGQxMy00ZTUyLThhYWQtY2UyOTRhNmRjZWQwIiwiZXhwIjoxNjQzMjEwNDg1LCJpc3MiOiJtb25TaXRlQVBJLmNvbSIsImF1ZCI6Im1vblNpdGVDT05TTy5jb20ifQ.F5wr5Pgvv5bz0f3bcvguNgruTRtb8fhjN82j8N1Sm9HFDiHK12Kx2WehOKUFnZfTjJyUJg956hVKwcL7lkZPBA'
      // })
    });
  }

  addNewCountry(newCntryName: string) {
    return this.$http.post(`https://localhost:44375/api/country`, { 'Name': newCntryName } );
  }

  deleteCountry(id : number){
    return this.$http.delete(`https://localhost:44375/api/country/${id}`);
  }

  updateCountry(country : Country){
    return this.$http.put(`https://localhost:44375/api/country`, { 'IdCountry' : country.idCountry, 'NewName' : country.name} );
  }
}

