import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { GrowlerService, GrowlerMessageType } from "../growler/growler.service";
import { LoggerService } from "../services/logger.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean;
  loginLogoutText = "Login";
  sub: Subscription;
  constructor(
    private router: Router,
    private authService: AuthService,
    private growlService: GrowlerService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.sub = this.authService.authChanged.subscribe(
      (loggedIn: boolean) => {
        this.setLoginLogoutText();
      },
      (err: any) => this.logger.log(err)
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  setLoginLogoutText() {
    this.loginLogoutText = this.authService.isAuthenticated
      ? "Login"
      : "Logout";
  }
  loginOrOut() {
    const isAuthenticated = this.authService.isAuthenticated;
    if (isAuthenticated) {
      this.authService.logout().subscribe(
        (status: boolean) => {
          this.setLoginLogoutText();
          this.growlService.growl("Logged Out", GrowlerMessageType.Info);
          this.router.navigate(["/customers"]);
          return;
        },
        (err: any) => this.logger.log(err)
      );
    }
    this.redirectToLogin();
  }

  redirectToLogin() {
    this.router.navigate(["/login"]);
  }
}
