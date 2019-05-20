import { Component, OnInit } from '@angular/core';
import { Field, FieldConfig } from '../../field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit, Field {
  field: FieldConfig;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
