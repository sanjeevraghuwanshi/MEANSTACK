import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AtuhInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = '49a5kdkv409fd39'; // this.authService.getAuthHeader();
    const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
    return next.handle(authReq);
  }
}
