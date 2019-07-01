import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [LoginRoutingModule.components],
  imports: [ReactiveFormsModule, SharedModule, LoginRoutingModule]
})
export class LoginModule {}
