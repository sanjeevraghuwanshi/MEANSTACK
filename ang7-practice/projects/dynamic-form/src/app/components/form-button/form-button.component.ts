import { Component, OnInit } from '@angular/core';
import { Field, FieldConfig } from '../../field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
})
export class FormButtonComponent implements OnInit, Field {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
