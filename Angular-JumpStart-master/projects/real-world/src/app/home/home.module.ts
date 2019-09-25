import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared';
import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule],
  providers: [HomeAuthResolver]
})
export class HomeModule {}
