import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowlerModule } from './growler/growler.module';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AtuhInterceptor } from './interceptors/auth.interceptor';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from './modal/modal.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';
import { EventBusService } from './services/event-bus.service';
import { OverlayModule } from './overlay/overlay.module';
import { DataService } from './services/data.service';
import { DialogService } from './services/dialog.service';
import { FilterService } from './services/filter.service';
import { SorterService } from './services/sorter.service';
import { TrackByService } from './services/trackby.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    GrowlerModule,
    ModalModule,
    OverlayModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    GrowlerModule,
    ModalModule,
    OverlayModule,
    NavbarComponent
  ],
  declarations: [NavbarComponent],
  providers: [
    AuthService,
    EventBusService,
    DataService,
    DialogService,
    FilterService,
    SorterService,
    TrackByService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AtuhInterceptor,
      multi: true
    },
    {
      provide: 'Window',
      useFactory: () => window
    }
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}