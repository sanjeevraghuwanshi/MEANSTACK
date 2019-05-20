import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config = [
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
          parameter: '^[a-zA-Z]+$',
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
}
