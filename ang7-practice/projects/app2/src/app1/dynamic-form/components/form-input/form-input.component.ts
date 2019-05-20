import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../models/form-field.interface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent implements FormField {
  config: FieldConfig<any>;
  group: FormGroup;
}
