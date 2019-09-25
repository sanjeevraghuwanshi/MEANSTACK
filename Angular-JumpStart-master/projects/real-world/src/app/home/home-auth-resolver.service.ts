import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../shared';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class HomeAuthResolver implements Resolve<boolean> {
  constructor(private userService: UserService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isAuthenticated.pipe(take(1));
  }
}
