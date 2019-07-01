import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GrowlerComponent } from "./growler/growler.component";
import { GrowlerService } from "./growler.service";

@NgModule({
  declarations: [GrowlerComponent],
  imports: [CommonModule],
  providers: [GrowlerService],
  exports: [GrowlerComponent]
})
export class GrowlerModule {}
