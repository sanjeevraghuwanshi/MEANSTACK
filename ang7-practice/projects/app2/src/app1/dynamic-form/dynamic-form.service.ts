import { Injectable } from '@angular/core';
import { FieldConfig } from './models/field-config.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  constructor(private fb: FormBuilder) {}
  bindValidations(validations: any[]): Validators {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(validation => {
        validList.push(
          validation.parameter
            ? Validators[validation.name](validation.parameter)
            : Validators[validation.name]
        );
      });

      return Validators.compose(validList);
    }
    return null;
  }
  toFormGroup(components: FieldConfig<any>[]): FormGroup {
    const group = {};
    components.forEach(component => {
      if (component.type === 'button') {
        return;
      }
      group[component.key] = this.fb.control(
        component.value,
        this.bindValidations(component.validations || [])
      );
    });

    return new FormGroup(group);
  }
}
