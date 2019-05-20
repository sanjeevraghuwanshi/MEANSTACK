import { FieldConfig } from './field-config.interface';
import { FormGroup } from '@angular/forms';

export interface FormField {
  config: FieldConfig<any>;
  group: FormGroup;
}
