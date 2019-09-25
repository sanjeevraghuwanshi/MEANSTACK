import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared';
import { ProfileResolver } from './profile-resolver.service';

@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule, ProfileRoutingModule],
  providers: [ProfileResolver],
  exports: []
})
export class ProfileModule {}
