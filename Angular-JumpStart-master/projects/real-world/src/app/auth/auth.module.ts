import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [SharedModule, AuthRoutingModule],
  providers: [NoAuthGuard]
})
export class AuthModule {}
