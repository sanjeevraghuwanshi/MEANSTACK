import { Directive, Input, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appSortby]'
})
export class SortbyDirective {
  private sortProperty: string;
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  @Input('appSortBy')
  set sortBy(value: string) {
    this.sortProperty = value;
  }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    event.preventDefault();
    this.changed.next(this.sortProperty);
  }
}
