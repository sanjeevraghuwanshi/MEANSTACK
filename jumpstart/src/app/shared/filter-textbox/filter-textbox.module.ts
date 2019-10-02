import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterTextboxComponent } from './filter-textbox.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [FilterTextboxComponent],
  declarations: [FilterTextboxComponent]
})
export class FilterTextboxModule {}
