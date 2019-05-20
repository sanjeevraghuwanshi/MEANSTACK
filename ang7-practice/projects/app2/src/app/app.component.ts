import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FieldConfig } from './dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)"
      >
      </dynamic-form>
      {{ form.valid }}
      {{ form.value | json }}
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      key: 'name',
      validations: [
        {
          name: 'required',
          validator: 'required',
          message: 'Name Required',
          parameter: '',
        },
        {
          name: 'pattern',
          validator: 'pattern',
          parameter: '^[a-zA-Z ]+$',
          message: 'Accept only text',
        },
      ],
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      key: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validations: [
        {
          name: 'required',
          validator: 'required',
          message: 'Name Required',
          parameter: '',
        },
      ],
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      key: 'submit',
    },
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Todd Motto');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
