import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OverlayRequestResponseInterceptor } from './overlay-request-response.interceptor';
import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';

@NgModule({
  imports: [CommonModule],
  exports: [OverlayComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OverlayRequestResponseInterceptor,
      multi: true
    }
  ],
  declarations: [OverlayComponent]
})
export class OverlayModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: OverlayModule) {
    super(parentModule);
  }
}
