import { Validators, ValidatorFn } from '@angular/forms';

export interface Validator {
  name: string;
  message: string;
  validator: any;
  parameter: any;
}
export interface FieldConfig<T> {
  disabled?: boolean;
  key: string;
  label?: string;
  name: string;
  options?: string[];
  placeholder?: string;
  type: string;
  validations?: Validator[];
  value?: T;
  order: number;
}
