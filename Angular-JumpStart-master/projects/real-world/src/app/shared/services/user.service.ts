import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public curreentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {}
  setAuth(user: User) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }
  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(new User());
    this.isAuthenticatedSubject.next(false);
  }
  attemptAuth(type: string, credentials: User): Observable<User> {
    const route = type === 'login' ? '/login' : '';
    return this.apiService.post('/users' + route, credentials).pipe(
      map(data => {
        this.setAuth(data.user);
        return data;
      })
    );
  }

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService
        .get('/user')
        .subscribe(data => this.setAuth(data.user), err => this.purgeAuth());
    } else {
      this.purgeAuth();
    }
  }

  getCurrencyUser(): User {
    return this.currentUserSubject.value;
  }
  update(user: User): Observable<User> {
    return this.apiService.put('/user', user).pipe(
      map(data => {
        this.currentUserSubject.next(data.user);
        return data.user;
      })
    );
  }
}