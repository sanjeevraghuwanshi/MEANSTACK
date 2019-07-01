import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { GrowlerModule } from './growler/growler.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule,GrowlerModule],
  exports: [NavbarComponent]
})
export class CoreModule {}
