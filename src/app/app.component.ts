import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { User } from './models/user.model';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MovieCollection_AngUI';

  // logSub : Subscription = new Subscription();
  // currentUser : User | null = null;
  
  constructor(){
  }
  
  ngOnInit(): void {
    // this.logSub = this.sessionServ.user$.subscribe(subUser => this.currentUser = subUser);
  }
}
