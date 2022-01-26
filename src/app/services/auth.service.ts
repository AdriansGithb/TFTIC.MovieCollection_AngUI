import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private $http : HttpClient) { }

  login(usermail: string, password : string) : Observable<User>{
    var json = JSON.parse('{"Email" : "'+usermail+'", "Password" : "'+password+'"}');

    console.log(json);

    return this.$http.post<User>(`https://localhost:44375/api/auth/login`, json);
  }

  register(regForm : FormGroup) : Observable<string>{
    var json = JSON.parse('{"email" : "'+regForm.value['usermail']
    +'", "name" : "'+regForm.value['name']
    +'", "password" : "'+regForm.value['password']
    +'", "repeatPassword" : "'+regForm.value['repeatedPassword']+'"}');

    console.log(json);

    return this.$http.post<string>(`https://localhost:44375/api/auth/register`, json) ;

  }


}
