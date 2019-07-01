import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterTextboxComponent],
  imports: [CommonModule, FormsModule],
  exports: [FilterTextboxComponent]
})
export class FilterTextboxModule {}
