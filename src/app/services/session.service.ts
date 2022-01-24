import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user$ = new BehaviorSubject<User | null>(null);

  constructor() { }

  openSession(user : User){
    this.user$.next(user);
    //set user in sessionStorage
    sessionStorage.setItem('connectedUser',JSON.stringify(user))

  }
  closeSession(){
    //clear sessionStorage
    sessionStorage.clear();
    this.user$.next(null);
  }

  getCurrentUser() : User | null {
    if(!sessionStorage.getItem('connectedUser')){
      return null;
    }
    return JSON.parse(sessionStorage.getItem('connectedUser')??'') as User;
  }

}
