import { Component, OnInit } from '@angular/core';
import { Field, FieldConfig } from '../../field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
})
export class FormSelectComponent implements OnInit, Field {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
