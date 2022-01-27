import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Link } from 'src/app/models/link.model';
import { User } from 'src/app/models/user.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  logSub : Subscription = new Subscription();
  currentUser : User | null = null;
  adminLinkList : Link[] = [];
  userLinkList : Link[] = [];
  
  constructor(private router: Router, private sessionServ : SessionService){
  }
  
  ngOnInit(): void {
    this.logSub = this.sessionServ.user$.subscribe(subUser => this.currentUser = subUser);

    this.adminLinkList = [
      {title : 'Administration', children : [
        {title : 'Countries', url : '/administration/countries'},
      ]}
    ]
    this.userLinkList = [
      {title : 'User menu', children : [
        {title : 'UserAccess', url : '/useraccess'},
      ]}
    ]

  }

  logout(){
    this.sessionServ.closeSession();
    alert("Au revoir, à bientôt !");
    this.router.navigate(['/home']);
  }

}
