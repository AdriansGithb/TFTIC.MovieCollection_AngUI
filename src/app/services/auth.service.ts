import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private $http : HttpClient) { }

  login(usermail: string, password : string) : Observable<User>{
    const params = `?Email=${usermail}&Password=${password}`;
    var json = JSON.parse('{"Email" : "'+usermail+'", "Password" : "'+password+'"}');

    console.log(json);

    return this.$http.post<User>(`https://localhost:44375/api/auth/login`, json);
  }


}
