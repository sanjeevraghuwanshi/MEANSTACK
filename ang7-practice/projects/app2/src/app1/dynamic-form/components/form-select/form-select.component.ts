import { Component, OnInit } from '@angular/core';
import { FormField } from '../../models/form-field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css'],
})
export class FormSelectComponent implements FormField {
  config: FieldConfig<any>;
  group: FormGroup;
}
