import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.scss']
})
export class FilterTextboxComponent implements OnInit {
  model: { filter: string } = { filter: null };
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  filterChanged(event: any) {
    event.preventDefault();
    this.changed.emit(this.model.filter);
  }
}
