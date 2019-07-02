import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
import { CapitalizePipe } from './capitalize.pipe';
import { TrimPipe } from './trim.pipe';
import { SortbyDirective } from './directives/sortby.directive';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextboxModule,
    CapitalizePipe,
    TrimPipe,
    SortbyDirective
  ],
  declarations: [CapitalizePipe, TrimPipe, SortbyDirective]
})
export class SharedModule {}
