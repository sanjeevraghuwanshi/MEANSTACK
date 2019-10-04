import { Injectable, Inject, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUserLogin } from 'src/app/shared/interfaces';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  authUrl = 'http://localhost:4200' + '/api/auth';
  isAuthenticated = false;
  redirectUrl: string;
  @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient, @Inject('Window') window: Window) {}
  private userAuthChanged(status: boolean) {
    this.authChanged.emit(status);
  }
  login(userLogin: IUserLogin): Observable<boolean> | void {
    return this.http.post<boolean>(this.authUrl + '/login', userLogin).pipe(
      map(loggedIn => {
        this.isAuthenticated = loggedIn;
        this.userAuthChanged(loggedIn);
        return loggedIn;
      }),
      catchError(this.handleError)
    );
  }
  logout(): Observable<boolean> {
    // return of(false);
    return this.http.post<boolean>(this.authUrl + '/logout', null).pipe(
      map(loggedOut => {
        this.isAuthenticated = !loggedOut;
        this.userAuthChanged(!loggedOut);
        return loggedOut;
      }),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('server error : ', error);
    if (error.error instanceof Error) {
      const errorMessage = error.error.message;
      return throwError(errorMessage);
    }

    return throwError(error || 'Server error');
  }
}
