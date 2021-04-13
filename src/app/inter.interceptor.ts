import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class InterInterceptor implements HttpInterceptor {

  constructor(
    private _auth : AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this._auth.user != null) {
      let token = localStorage.getItem("token");
      let clone = request.clone({setHeaders: { "Authorization": "Bearer " + token }});
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
