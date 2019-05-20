import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeroFormComponent],
})
export class HeroModule {}
