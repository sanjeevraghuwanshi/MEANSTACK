import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';

@NgModule({
  imports: [CommonModule, FilterTextboxModule],
  exports: [],
  declarations: [],
})
export class SharedModule {}
