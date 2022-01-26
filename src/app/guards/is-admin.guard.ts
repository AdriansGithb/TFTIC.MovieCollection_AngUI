import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private router: Router, private sessionServ: SessionService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.sessionServ.getCurrentUser()) {
      // navigate to Login page as user is not authenticated
      this.router.navigate(['/sign']);
      return false;
    }
    if (this.sessionServ.getCurrentUser()?.isAdmin) {
      return true;
    }
    console.log('User is not a admin, access refused');
    this.router.navigate(['/home']);
    return false;
  }
  
}
