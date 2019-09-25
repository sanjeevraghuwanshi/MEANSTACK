import { Component, OnInit, Input } from '@angular/core';
import { Errors } from './models';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html'
})
export class ListErrorsComponent implements OnInit {
  formattedErrors: Array<string> = [];
  constructor() {}
  ngOnInit() {}
  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];
    if (errorList.errors) {
      for (const field in errorList.errors) {
        this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
      }
    }
  }
  get errorList() {
    return this.formattedErrors;
  }
}
