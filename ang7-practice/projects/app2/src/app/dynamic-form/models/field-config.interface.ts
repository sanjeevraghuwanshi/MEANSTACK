import { ValidatorFn } from '@angular/forms';
export interface Validator {
  name: string;
  validator: any;
  message: string;
  parameter: string;
}
export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: string[];
  placeholder?: string;
  type: string;
  validations?: Validator[];
  value?: any;
  key: string;
}
