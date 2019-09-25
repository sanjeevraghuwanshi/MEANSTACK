import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Profile } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {
  constructor(private apiService: ApiService) {}
  get(username: string): Observable<Profile> {
    return this.apiService
      .get('/profiles/' + username)
      .pipe(map((data: { profile: Profile }) => data.profile));
  }
  follow(username: string): Observable<Profile> {
    return this.apiService.post('/profiles/' + username + '/follow');
  }
  unfollow(username: string): Observable<Profile> {
    return this.apiService.delete('/profiles/' + username + '/follow');
  }
}
