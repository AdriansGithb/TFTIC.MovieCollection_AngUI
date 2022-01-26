import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsAnonymousGuard implements CanActivate {
  constructor(private router: Router, private sessionServ: SessionService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.sessionServ.getCurrentUser()) {    
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
  
}
