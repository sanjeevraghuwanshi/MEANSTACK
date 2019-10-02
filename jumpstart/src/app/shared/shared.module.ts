import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortbyDirective } from './directives/sortby.directive';
import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
import { FormsModule } from '@angular/forms';
import { MapModule } from './map/map.module';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
  declarations: [SortbyDirective, CapitalizePipe, TrimPipe],
  imports: [CommonModule, FilterTextboxModule, MapModule, PaginationModule],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextboxModule,
    MapModule,
    CapitalizePipe,
    TrimPipe,
    SortbyDirective,
    PaginationModule
  ]
})
export class SharedModule {}
