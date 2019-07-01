import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { LoggerService } from "../services/logger.service";
import { AuthService } from "../services/auth.service";
import { GrowlerService, GrowlerMessageType } from "../growler/growler.service";

@Component({
  selector: "cm-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  loginOrLogoutText = "Login";
  sub: Subscription;

  constructor(
    private router: Router,
    private loggerService: LoggerService,
    private authService: AuthService,
    private growler: GrowlerService
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
          this.growler.growl("Logged Out", GrowlerMessageType.Info);
          this.router.navigate(["/customers"]);
          return;
        },
        (err: any) => this.loggerService.logError(err)
      );
    }
    this.redirectToLogin();
  }

  redirectToLogin() {
    this.router.navigate(["/login"]);
  }

  setLoginLogoutText() {
    this.loginOrLogoutText = this.authService.isAuthenticated
      ? "Logout"
      : "Login";
  }
}
