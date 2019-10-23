import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { LoggerService } from '../core/services/logger.service';
import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';
import { ValidationService } from '../core/services/validation.service';
import { ICustomer, IUserLogin } from '../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private logger: LoggerService,
    private growler: GrowlerService
  ) {}

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }
  submit({ value, valid }: { value: IUserLogin; valid: boolean }) {
    this.authService.login(value).subscribe(
      (status: boolean) => {
        if (status) {
          this.growler.growl(`Logged in`, GrowlerMessageType.Info);
          if (this.authService.redirectUrl) {
            const redirectUrl = this.authService.redirectUrl;
            this.authService.redirectUrl = '';
            this.router.navigate([redirectUrl]);
          } else {
            this.router.navigate(['/customers']);
          }
        } else {
          const loginError = 'Unable to login';
          this.errorMessage = loginError;
          this.growler.growl(loginError, GrowlerMessageType.Danger);
        }
      },
      (err: any) => this.logger.log(err)
    );
  }
}
