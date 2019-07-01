import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { EnsureModuleLoadedOnceGuard } from "./ensure-module-loaded-once.guard";
import { NavbarComponent } from "./navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule],
  exports: [NavbarComponent]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
