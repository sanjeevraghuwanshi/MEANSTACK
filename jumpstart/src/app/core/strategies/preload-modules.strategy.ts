import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../services/logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PreloadModulesStrategy implements PreloadingStrategy {
  constructor(private logger: LoggerService) {}
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route && route.data['preload']) {
      this.logger.log(`Preloaded: ${route.path}`);
      return load();
    } else {
      return of(null);
    }
  }
}
