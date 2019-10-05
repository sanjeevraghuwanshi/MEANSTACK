import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EventBusService, EmitEvent, Events } from '../services/event-bus.service';
import { map, tap, delay, catchError } from 'rxjs/operators';

@Injectable()
export class OverlayRequestResponseInterceptor implements HttpInterceptor {
  constructor(private eventBus: EventBusService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const randomNumber = this.getRandomIntInclusive(0, 1500);
    const started = Date.now();
    this.eventBus.emit(new EmitEvent(Events.httpRequest));
    return next.handle(req).pipe(
      delay(randomNumber),
      tap(event => {
        if (event instanceof HttpResponse) {
          const elapsedTime = Date.now() - started;
          this.eventBus.emit(new EmitEvent(Events.httpResponse));
        }
      }),
      catchError(err => {
        this.eventBus.emit(new EmitEvent(Events.httpResponse));
        return of(null);
      })
    );
  }
  getRandomIntInclusive(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
