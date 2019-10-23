import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowlerComponent } from './growler.component';
import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';
import { GrowlerService } from './growler.service';

@NgModule({
  imports: [CommonModule],
  exports: [GrowlerComponent],
  declarations: [GrowlerComponent],
  providers: [GrowlerService]
})
export class GrowlerModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: GrowlerModule) {
    super(parentModule);
  }
}
