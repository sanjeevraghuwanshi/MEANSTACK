import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUserLogin } from "src/app/shared/interfaces";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = "/api/auth";
  isAuthenticated = false;
  redirected: string;

  @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  private userAuthChanged(status: boolean) {
    this.authChanged.emit(status);
  }

  login(userLogin: IUserLogin): Observable<boolean> {
    this.isAuthenticated = true;
    this.userAuthChanged(true);
    return of(true);
  }

  logout(): Observable<boolean> {
    this.isAuthenticated = false;
    this.userAuthChanged(false);
    return of(false);
  }
}
