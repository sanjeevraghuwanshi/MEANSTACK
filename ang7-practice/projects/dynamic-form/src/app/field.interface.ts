import { FormGroup } from '@angular/forms';

export interface Validator {
  name: string;
  parameter: string;
  message: string;
  validator: string;
}

export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  placeholder?: string;
  key?: string;
  validations?: Validator[];
}

export interface Field {
  field: FieldConfig;
  group: FormGroup;
}
