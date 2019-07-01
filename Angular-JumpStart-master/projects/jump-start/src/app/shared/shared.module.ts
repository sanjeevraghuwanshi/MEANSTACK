import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, FilterTextboxModule],
  declarations: []
})
export class SharedModule {}
