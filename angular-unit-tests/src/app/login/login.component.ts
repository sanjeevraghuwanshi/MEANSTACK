import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  needsUserLogin: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isUserAuthenticated().then((authenticated) => {
      this.needsUserLogin = !authenticated;
    });
  }

  needsLogin(): boolean {
    return !this.authService.isAuthenticated();
  }

}
