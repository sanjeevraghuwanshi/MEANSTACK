import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.servcie';
import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';

@NgModule({
  imports: [CommonModule],
  exports: [ModalComponent],
  providers: [ModalService],
  declarations: [ModalComponent]
})
export class ModalModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: ModalModule) {
    super(parentModule);
  }
}
