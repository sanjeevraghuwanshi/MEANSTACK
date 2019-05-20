import { Component, ViewChild } from '@angular/core';
import { FieldConfig } from './field.interface';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Username',
      name: 'name',
      placeholder: 'Enter your name',
      key: 'uName',
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

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
