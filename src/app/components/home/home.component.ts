import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
logSub : Subscription = new Subscription();
currentUser : User | null = null;


constructor(private sessionServ : SessionService){
}

  ngOnInit(): void {
    this.logSub = this.sessionServ.user$.subscribe(subUser => this.currentUser = subUser);
  }

}
