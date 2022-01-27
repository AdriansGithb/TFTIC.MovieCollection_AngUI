import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private sessionServ: SessionService) { }

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.sessionServ.user$.value?.token;
    if(token){
      request = request.clone({
        setHeaders : {
          Authorization : `Bearer ${token}`,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((e) => {
        if(e.status === 401) {
          this.sessionServ.closeSession();
        }
        const error = e.error.message || e.statusText;
        return throwError(e);
      })
    );
  }
}
