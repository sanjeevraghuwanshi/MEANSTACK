import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.modules';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutRoutingModule.components]
})
export class AboutModule {}
