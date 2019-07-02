import { Directive, Output, EventEmitter, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[cmSortby]'
})
export class SortbyDirective {
  private sortProperty: string;
  @Output() sorted: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  @Input('cmSortBy')
  set sortBy(value: string) {
    this.sortProperty = value;
  }
  @HostListener('click')
  onclick() {
    event.preventDefault();
    this.sorted.next(this.sortProperty);
  }
}
