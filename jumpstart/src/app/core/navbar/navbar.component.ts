import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GrowlerService, GrowlerMessageType } from '../growler/growler.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  sub: Subscription;
  loginLogoutText = 'Login';
  isCollapsed: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private growlerService: GrowlerService,
    private loggerService: LoggerService
  ) {}

  ngOnInit() {
    this.sub = this.authService.authChanged.subscribe(
      (loggedIn: boolean) => {
        this.setLoginLogoutText();
      },
      (err: any) => this.loggerService.logError(err)
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  loginOrOut() {
    const isAuthenticated = this.authService.isAuthenticated;
    if (isAuthenticated) {
      this.authService.logout().subscribe(
        (status: boolean) => {
          this.setLoginLogoutText();
          this.growlerService.growl('Logged out', GrowlerMessageType.Info);
          this.router.navigate(['/customers']);
          return;
        },
        (err: any) => this.loggerService.logError(err)
      );
    }
    this.redirectToLogin();
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
  setLoginLogoutText() {
    this.loginLogoutText = this.authService.isAuthenticated ? 'Logout' : 'Login';
  }
}
