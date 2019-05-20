import { Component, OnInit } from '@angular/core';
import { FormField } from '../../models/form-field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css'],
})
export class FormButtonComponent implements FormField {
  config: FieldConfig<any>;
  group: FormGroup;
}
