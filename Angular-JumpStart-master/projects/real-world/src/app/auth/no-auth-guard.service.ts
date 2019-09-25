import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../shared';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isAuthenticated.pipe(
      take(1),
      map(bool => !bool)
    );
  }
}
