import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { GrowlerModule } from "./growler/growler.module";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, GrowlerModule, HttpClientModule],
  exports: [NavbarComponent, GrowlerModule, HttpClientModule],
  providers: [AuthService]
})
export class CoreModule {}
