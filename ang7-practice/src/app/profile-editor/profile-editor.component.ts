import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });
  // profileForm = new FormGroup({
  //   firstName: new FormControl('rrrr'),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  onSubmit() {
    console.warn(this.profileForm.value);
  }
  updateProfilePatch() {
    this.profileForm.patchValue({
      firstName: 'Ram',
      address: {
        street: '123 dfsd',
      },
    });
  }

  updateProfileSet() {
    this.profileForm.setValue({
      firstName: 'Ram',
      lastName: 'Ram',
      address: {
        street: '123 dfsd',
        city: 'pune',
        state: 'MH',
        zip: '123456',
      },
    });
  }
}
