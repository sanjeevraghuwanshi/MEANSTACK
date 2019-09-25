import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfileService } from '../shared/services/profiles.service';
import { Profile } from '../shared';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
  constructor(private profileService: ProfileService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.profileService.get(route.params['username']);
    // .catch(err => this.router.navigateByUrl('/'));
  }
}
