import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";
import { LoggerService } from "../../core/services/logger.service";
import {
  GrowlerService,
  GrowlerMessageType
} from "../../core/growler/growler.service";
import { ValidationService } from "../../../../../../src/app/core/services/validation.service";
import { IUserLogin } from "../../shared/interfaces";

@Component({
  selector: "cm-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private atuhService: AuthService,
    private loggerService: LoggerService,
    private growlService: GrowlerService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, ValidationService.emailValidator]],
      password: ["", Validators.required, Validators.length]
    });
  }

  submit({ value, valid }: { value: IUserLogin; valid: boolean }) {
    this.atuhService.login(value).subscribe(
      (status: boolean) => {
        if (status) {
          this.growlService.growl("Logged in", GrowlerMessageType.Info);
          if (this.atuhService.redirectUrl) {
            const redirectUrl = this.atuhService.redirectUrl;
            this.atuhService.redirectUrl = "";
            this.router.navigate([redirectUrl]);
          }
          this.router.navigate(["/customers"]);
        } else {
          const loginError = "Unable to login";
          this.errorMessage = loginError;
          this.growlService.growl(loginError, GrowlerMessageType.Danger);
        }
      },
      (err: any) => this.loggerService.logError(err)
    );
  }
}
