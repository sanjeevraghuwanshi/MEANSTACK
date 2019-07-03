import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
import { CapitalizePipe } from './capitalize.pipe';
import { TrimPipe } from './trim.pipe';
import { SortbyDirective } from './directives/sortby.directive';
import { PaginationModule } from './pagination/pagination.module';
import { MapModule } from './map/map.module';

@NgModule({
  imports: [CommonModule, MapModule, FilterTextboxModule, PaginationModule],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextboxModule,
    CapitalizePipe,
    TrimPipe,
    SortbyDirective,
    PaginationModule,
    MapModule
  ],
  declarations: [CapitalizePipe, TrimPipe, SortbyDirective]
})
export class SharedModule {}
